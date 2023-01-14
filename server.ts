import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { DbService } from "./db/dbService";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

DbService.connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create
app.post("/books/insert", (req: Request, res: Response) => {
    const db = DbService.getDbServiceInstance();
    const result = db.insertNewBook(req);

    result
        .then((data: any) => res.json({ data: data }))
        .catch((err: Error) => console.log(err));
});

//read
app.get("/books", (req: Request, res: Response) => {
    const db = DbService.getDbServiceInstance();

    const page: number = parseInt(req.query.page as string, 10);
    const limit: number = parseInt(req.query.limit as string, 10);

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = page * limit;

    const result = db.getAllData();

    console.log(page, limit);

    result
        .then((data: any) => {
            const paginatedBooksData = data.books.slice(startIndex, endIndex);
            const allBooksData = data.books;
            const booksData = page && limit ? paginatedBooksData : allBooksData;
            const authorsArray = data.authors;
            let next, previous;
            if (endIndex < data.books.length) {
                next = data.next = {
                    page: page + 1,
                    limit: limit,
                };
            }
            if (startIndex > 0) {
                previous = data.previous = {
                    page: page - 1,
                    limit: limit,
                };
            }
            const results = {
                next,
                previous,
                booksData,
                authorsArray,
            };
            res.json(results);
        })
        .catch((err: Error) => console.log(err));
});

//update
app.patch("/books/update", (req: Request, res: Response) => {
    const db = DbService.getDbServiceInstance();

    const result = db.updateBook(req);

    result
        .then((data: any) => res.json({ success: data }))
        .catch((err: Error) => console.log(err));
});

//delete
app.delete("/books/delete/:id", (req: Request, res: Response) => {
    const db = DbService.getDbServiceInstance();

    const result = db.deleteBook(req.params.id);

    result
        .then((data: any) => res.json({ success: data }))
        .catch((err: Error) => console.log(err));
});

app.listen(port, () => {
    console.log(`[server] Server is running at http://localhost:${port}`);
});
