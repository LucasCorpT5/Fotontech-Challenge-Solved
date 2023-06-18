import { Request, Response } from "express"
import { userService } from "../services/userService";
import bcrypt from "bcrypt";
import { jwtService } from "../services/jwtService";

export const authController = {
    register: async(req: Request, res: Response) => {
        const { name, email, password } = req.body;

        try {
            const user = await userService.findByEmail(email);

            if(user) {
                return res.status(404).json({ message: "Esse email já está cadastrado." });
            }

            const createUser = await userService.createUser(name, email, password);

            return res.status(201).json({ createUser });

        } catch(err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    },

    login: async(req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            const user = await userService.findByEmail(email);

            if(!user) return res.status(404).json({ message: "O email não foi encontrado!" });

            const verifyPass = await bcrypt.compare(password, user.password);

            if(!verifyPass) return res.status(404).json({ message: "Senha incorreta" });

            const token = await jwtService.signToken(user) // estamos dizendo que o token vai expirar em 1 dia

            return res.status(200).json({ authenticated: true, user, token });

        } catch(err) {
            if(err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}