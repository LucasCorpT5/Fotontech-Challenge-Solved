import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

const secret = "chave-secreta-jwt";

export const jwtService = {
    signToken: (user: User) => {
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email
        }
        return jwt.sign(payload, secret, { expiresIn: "1d" });
    },

    verifyToken: (token: string, callbackfn: jwt.VerifyCallback) => {
        jwt.verify(token, secret, callbackfn);
    }
}