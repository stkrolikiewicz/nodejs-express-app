import mysql, { Connection, MysqlError } from "mysql";
import dotenv from "dotenv";
import { createSchemas } from "./createSchemas";
import { Request, Response } from "express";

let instance: DbService | null = null;

dotenv.config();

const connection: Connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
});

connection.connect((err: MysqlError) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("[dbService] Connected to MySQL server");

        try {
            createSchemas(connection);
        } catch (err) {
            console.log("[dbService] " + err);
        }
    }
    console.log("[dbService] Database " + connection.state);
});

export class DbService {
    static getDbServiceInstance(): DbService {
        return instance ? instance : new DbService();
    }

    async insertNewBook(req: Request): Promise<any> {
        try {
            const { name, year, price, pages, description, image } = req.body;

            const response = await new Promise((resolve, reject) => {
                const query = `INSERT INTO books (name, year, price, pages, description, image) VALUES ("${name}", "${year}", ${price}, ${pages} ,"${description}", "${image}");`;

                connection.query(query, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                    console.log(
                        `[dbService] ${result.affectedRows} row inserted into books table`
                    );
                });
            });
        } catch (err) {
            console.log(err);
        }
    }

    async getAllData(): Promise<any> {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = `SELECT * FROM books;`;

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });
            return response;
        } catch (err) {
            console.log(err);
        }
    }

    async updateBook(req: Request): Promise<any> {
        try {
            const {
                id,
                name,
                year,
                price,
                pages,
                description,
                image,
            } = req.body;

            const response = await new Promise((resolve, reject) => {
                const query = `UPDATE books SET name = "${name}", year = ${year}, price = ${price}, pages = ${pages}, description = "${description}", image = "${image}" WHERE id = ${parseInt(
                    id,
                    10
                )};`;

                connection.query(query, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                    console.log(
                        `[dbService] ${result.affectedRows} row updated in books table`
                    );
                });
            });
            return response === 1 ? true : false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async deleteBook(id: string): Promise<any> {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = `DELETE FROM books WHERE id = ${parseInt(
                    id,
                    10
                )};`;

                connection.query(query, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                    console.log(
                        ` [dbService] ${result.affectedRows} row deleted from books table`
                    );
                });
            });
            return response === 1 ? true : false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}
