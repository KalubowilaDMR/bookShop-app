const express = require('express');
const router = express.Router();
const Book = require("../model/Book");
// const bookController = require("../controller/books-controller");
const {
    getAllBooks,
    addBook,
    getById,
    updateBook,
    deleteBook
} = require("../controller/books-controller");

router.get("/", getAllBooks);
router.post("/", addBook);
router.get("/:bookId", getById);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;