import { Request, Response } from "express"
import { articleService } from "../services/articleService";

export const articleController = {
    createArticle: async(req: Request, res: Response) => {
        try {
            const { name, content } = req.body;

            const createArticle = await articleService.createArticle(name, content);

            return res.status(201).json({ createArticle });

        } catch(err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    },

    listArticles: async(req: Request, res: Response) => {
        try {
            const articles = await articleService.listArticles();

            return res.status(200).json(articles);
        } catch(err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    },

    findArticlesWithId: async(req: Request, res: Response) => {
        const id = req.params.id;
        
        try {
            const articles = await articleService.findArticles(id);

            return res.status(200).json(articles);
        } catch(err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    }
}