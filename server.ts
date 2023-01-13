import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { DbService } from "./db/dbService";
const dbService = require("./db/dbService");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create
app.post("/insert", (req: Request, res: Response) => {
    const db = DbService.getDbServiceInstance();
    const result = db.insertNewBook(req);

    result
        .then((data: any) => res.json({ data: data }))
        .catch((err: Error) => console.log(err));
});

//read
app.get("/", (req: Request, res: Response) => {
    const db = DbService.getDbServiceInstance();

    const result = db.getAllData();

    result
        .then((data: any) => res.json({ data: data }))
        .catch((err: Error) => console.log(err));
});

//update
app.patch("/update", (req: Request, res: Response) => {
    const db = DbService.getDbServiceInstance();

    const result = db.updateBook(req);

    result
        .then((data: any) => res.json({ success: data }))
        .catch((err: Error) => console.log(err));
});

//delete
app.delete("/delete/:id", (req: Request, res: Response) => {
    const db = DbService.getDbServiceInstance();

    const result = db.deleteBook(req.params.id);

    result
        .then((data: any) => res.json({ success: data }))
        .catch((err: Error) => console.log(err));
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
