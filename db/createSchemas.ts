import { Connection } from "mysql";

export const createSchemas = (connection: Connection): void => {
    const dbName = process.env.DATABASE;
    connection.query(`CREATE DATABASE ${dbName};`, (err): void => {
        if (err) {
            console.log(`[DB] Database '${dbName}' already exists.`);
        } else {
            console.log("[DB] Database created");
        }
        connection.query(`USE ${dbName}`, (err): void => {
            if (err) throw err;

            console.log(`[DB] Using database '${dbName}'`);

            const createBooksTable = `CREATE TABLE books (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                year INT NOT NULL,
                price DECIMAL(10,2) NOT NULL,
                pages INT NOT NULL,
                description TEXT NOT NULL,
                image VARCHAR(255) NOT NULL
            )`;

            const createAuthorsTable = `CREATE TABLE authors (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                year_of_birth INT NOT NULL,
                year_of_death INT,
                image VARCHAR(255) NOT NULL
            )`;

            const createBooksAuthorsTable = `CREATE TABLE books_authors (
                id INT AUTO_INCREMENT PRIMARY KEY,
                book_id INT NOT NULL,
                author_id INT NOT NULL,
                FOREIGN KEY (book_id) REFERENCES books(id),
                FOREIGN KEY (author_id) REFERENCES authors(id)
            )`;

            connection.query(createBooksTable, (err): void => {
                if (err) {
                    console.log("[DB] Table 'books' already exists");
                } else {
                    console.log("[DB] Table 'books' created");
                    const insertBooksRows = `INSERT INTO books (
                        name,
                        year,
                        price,
                        pages,
                        description,
                        image
                    ) VALUES ?`;

                    const books = [
                        [
                            "The Lord of the Rings",
                            1949,
                            49.99,
                            1216,
                            "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "The Hobbit",
                            1937,
                            19.99,
                            310,
                            "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "The Silmarillion",
                            1977,
                            29.99,
                            784,
                            "The Silmarillion is a collection of tales set in the world of Arda, written by J. R. R. Tolkien. The book was published in 1977, compiled and edited by Christopher Tolkien from earlier manuscripts and notes. The Silmarillion is a fundamental text in the legendarium, and forms the basis of much of Tolkien's secondary literature, including The Lord of the Rings and The Hobbit.",
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "The Fellowship of the Ring",
                            1954,
                            29.99,
                            423,
                            "The Fellowship of the Ring is the first volume of J. R. R. Tolkien's epic high fantasy novel The Lord of the Rings. It is followed by The Two Towers and The Return of the King. The Fellowship of the Ring was named 1955 British Book of the Year and was awarded a prize from the New York Herald Tribune for best juvenile fiction. It is the first part of Tolkien's The Lord of the Rings, followed by The Two Towers and The Return of the King.",
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "The Life of Pi",
                            2001,
                            19.99,
                            320,
                            'The Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel',
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "The Alchemist",
                            1988,
                            19.99,
                            197,
                            "The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it has been translated into at least 67 languages as of October 2013. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.",
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "The Da Vinci Code",
                            2003,
                            19.99,
                            454,
                            "The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie.",
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "In the Tall Grass",
                            2012,
                            19.99,
                            320,
                            "In the Tall Grass is a 2012 horror novella by American authors Stephen King and Joe Hill. It was first published in the October 2012 issue of Esquire magazine, and was later included in King's 2013 collection Full Dark, No Stars.",
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                    ];

                    connection.query(
                        insertBooksRows,
                        [books],
                        (err, result) => {
                            if (err) throw err;
                            console.log(
                                `[DB] ${result.affectedRows} rows inserted into 'books'`
                            );
                        }
                    );
                }
            });
            connection.query(createAuthorsTable, (err): void => {
                if (err) {
                    console.log("[DB] Table 'authors' already exists");
                } else {
                    console.log("[DB] Table 'authors' created");
                    const insertAuthorsRows = `INSERT INTO authors (
                        name,
                        year_of_birth,
                        year_of_death,
                        image
                    ) VALUES ?`;

                    const authors = [
                        [
                            "J.R.R Tolkien",
                            1892,
                            1973,
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "Yann Martel",
                            1963,
                            null,
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "Paulo Coelho",
                            1947,
                            null,
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "Dan Brown",
                            1964,
                            null,
                            "https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg",
                        ],
                        [
                            "Stephen King",
                            1947,
                            null,
                            "https://pl.wikipedia.org/wiki/Stephen_King#/media/Plik:Stephen_King,_Comicon.jpg",
                        ],
                        [
                            "Joe Hill",
                            1972,
                            null,
                            "https://en.wikipedia.org/wiki/File:Joe_Hill_by_Gage_Skidmore.jpg",
                        ],
                    ];

                    connection.query(
                        insertAuthorsRows,
                        [authors],
                        (err, result) => {
                            if (err) throw err;
                            console.log(
                                `[DB] ${result.affectedRows} rows inserted into 'authors'`
                            );
                        }
                    );
                }
            });
            connection.query(createBooksAuthorsTable, (err): void => {
                if (err) {
                    console.log("[DB] Table 'books_authors' already exists");
                } else {
                    console.log("[DB] Table 'books_authors' created");
                    const insertBooksAuthorsRows = `INSERT INTO books_authors (
                        book_id,
                        author_id
                    ) VALUES ?`;

                    const books_authors = [
                        [1, 1],
                        [2, 1],
                        [3, 1],
                        [4, 1],
                        [5, 2],
                        [6, 3],
                        [7, 4],
                        [8, 5],
                        [8, 6],
                    ];

                    connection.query(
                        insertBooksAuthorsRows,
                        [books_authors],
                        (err, result) => {
                            if (err) throw err;
                            console.log(
                                `[DB] ${result.affectedRows} rows inserted into 'books_authors'`
                            );
                        }
                    );
                }
            });
        });
    });
};
