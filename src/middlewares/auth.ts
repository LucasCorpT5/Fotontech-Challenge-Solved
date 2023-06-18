import { Request, Response, NextFunction } from "express";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";
import { JwtPayload } from "jsonwebtoken";

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;

    if(!authorizationHeader) return res.status(404).json({
        message: "Não autorizado: nenhum token foi encontrado"
    });

    const token = authorizationHeader.replace(/Bearer /, ''); // Pegando apenas o token

    jwtService.verifyToken(token, async(err, decoded) => {
        if(err || typeof decoded === "undefined") {
            return res.status(404).json({
                message: "Não autorizado: token inválido"
            });
        }

        const user = await userService.findByEmail((decoded as JwtPayload).email);

        next();
        return user;
    });
}