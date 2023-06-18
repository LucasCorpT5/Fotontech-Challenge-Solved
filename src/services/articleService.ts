import prisma from "../prisma"

export const articleService = {
    createArticle: async(name: string, content: string) => {
        const article = await prisma.article.create({
            data: {
                name,
                content
            }
        });

        return article;
    },

    listArticles: async() => {
        const article = await prisma.article.findMany();

        return article;
    },

    findArticles: async(id: string) => {
        const article = await prisma.article.findMany({
            where: {
                id
            }
        });

        return article;
    }
}