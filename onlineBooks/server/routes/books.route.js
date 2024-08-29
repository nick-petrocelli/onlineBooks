import { Router } from "express";
import { createBook, getAllBooks, getOneBook, updateOneBook, deleteOneBook } from "../controllers/books.controller.js";
const router = Router();


router.route("/books")
    .post(createBook)
    .get(getAllBooks)

router.route("/books/:id")
    .get(getOneBook)
    .put(updateOneBook)
    .delete(deleteOneBook);


export default router;
