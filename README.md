# nodejs-express-app

## Introduction

CRUD Node.js + express server-side app using MySQL to store and manipulate data about books and authors. The whole project is written in TypeScript.

## Setup

To run this project, first, install it locally using npm:

```
$ npm install
```

Iniside the project folder create `.env` file and inside the file set variables (with own values if needed) such as in example below in order to connect to MySQL server:

```
PORT=8000
USER=root
PASSWORD=password
DATABASE=booksAndAuthors
HOST=localhost
```

## Run

To run the project you have to use command (inside the project folder):

```
$ node server.ts
```

or if you whant to relaod the server automatically after each change in compiled files:

```
$ nodemon server.ts
```

### <u>Requests</u>

The request should be sent to `http://localhost:8000/` (if the global PORT variable i set to 8000)

### <u>Pagination</u>

If you want to use pagination you can do it for books table using reqest params page and limit (have to exist together).
Here is an example of GET requests URL: `http://localhost:8000/books?page=2&limit=3`

## Technologies

-   Node.js
-   Express.js
-   MySQL
-   TypeScript
