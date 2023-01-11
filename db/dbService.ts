import mysql, { Connection, MysqlError } from "mysql";
import dotenv from "dotenv";
import { createSchemas } from "./createSchemas";

dotenv.config();

const connection: Connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    // database: process.env.DATABASE,
});

connection.connect((err: MysqlError) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Connected to MySQL server");

        try {
            createSchemas(connection);
        } catch (err) {
            console.log(err);
        }
    }
    console.log("db " + connection.state);
});
