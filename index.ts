import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const dbService = require("./dbService");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
