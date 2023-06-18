import express from "express";
import { authController } from "./controllers/authController";
import { ensureAuth } from "./middlewares/auth";
import { articleController } from "./controllers/articleController";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.post("/article/create", ensureAuth, articleController.createArticle);
router.get("/article/all", ensureAuth, articleController.listArticles);
router.get("/article/:id", ensureAuth, articleController.findArticlesWithId);

export {
    router,
}