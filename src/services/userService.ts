import bcrypt from "bcrypt";
import prisma from "../prisma";

export const userService = {
    createUser: async(name: string, email: string, password: string) => {
        const hashedPassword = await bcrypt.hash(password.toString(), 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        return user;
    },

    findByEmail: async(email: string) => {
        const findEmail = await prisma.user.findFirst({
            where: {
                email
            }
        });

        return findEmail;
    }
}