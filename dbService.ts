import mysql, { Connection, MysqlError } from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection: Connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

connection.connect((err: MysqlError) => {
    if (err) {
        console.log(err.message);
    }
    console.log("db " + connection.state);
});
