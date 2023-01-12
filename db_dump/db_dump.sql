-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: booksAndAuthors
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `year_of_birth` int NOT NULL,
  `year_of_death` int DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'J.R.R Tolkien',1892,1973,'https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(2,'Yann Martel',1963,NULL,'https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(3,'Paulo Coelho',1947,NULL,'https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(4,'Dan Brown',1964,NULL,'https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(5,'Stephen King',1947,NULL,'https://pl.wikipedia.org/wiki/Stephen_King#/media/Plik:Stephen_King,_Comicon.jpg'),(6,'Joe Hill',1972,NULL,'https://en.wikipedia.org/wiki/File:Joe_Hill_by_Gage_Skidmore.jpg');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `year` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `pages` int NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'The Lord of the Rings',1949,49.99,1216,'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.','https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(2,'The Hobbit',1937,19.99,310,'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children\'s literature.','https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(3,'The Silmarillion',1977,29.99,784,'The Silmarillion is a collection of tales set in the world of Arda, written by J. R. R. Tolkien. The book was published in 1977, compiled and edited by Christopher Tolkien from earlier manuscripts and notes. The Silmarillion is a fundamental text in the legendarium, and forms the basis of much of Tolkien\'s secondary literature, including The Lord of the Rings and The Hobbit.','https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(4,'The Fellowship of the Ring',1954,29.99,423,'The Fellowship of the Ring is the first volume of J. R. R. Tolkien\'s epic high fantasy novel The Lord of the Rings. It is followed by The Two Towers and The Return of the King. The Fellowship of the Ring was named 1955 British Book of the Year and was awarded a prize from the New York Herald Tribune for best juvenile fiction. It is the first part of Tolkien\'s The Lord of the Rings, followed by The Two Towers and The Return of the King.','https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(5,'The Life of Pi',2001,19.99,320,'The Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor \"Pi\" Patel','https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(6,'The Alchemist',1988,19.99,197,'The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it has been translated into at least 67 languages as of October 2013. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.','https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(7,'The Da Vinci Code',2003,19.99,454,'The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie.','https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg'),(8,'In the Tall Grass',2012,19.99,320,'In the Tall Grass is a 2012 horror novella by American authors Stephen King and Joe Hill. It was first published in the October 2012 issue of Esquire magazine, and was later included in King\'s 2013 collection Full Dark, No Stars.','https://images-na.ssl-images-amazon.com/images/I/51Zt3u7YFJL._SX331_BO1,204,203,200_.jpg');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books_authors`
--

DROP TABLE IF EXISTS `books_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books_authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `book_id` (`book_id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `books_authors_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `books_authors_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_authors`
--

LOCK TABLES `books_authors` WRITE;
/*!40000 ALTER TABLE `books_authors` DISABLE KEYS */;
INSERT INTO `books_authors` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,1),(5,5,2),(6,6,3),(7,7,4),(8,8,5),(9,8,6);
/*!40000 ALTER TABLE `books_authors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-12 16:17:37
