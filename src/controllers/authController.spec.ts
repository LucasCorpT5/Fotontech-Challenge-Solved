import request from "supertest"
import app from "../server"

describe("Register user", () => {
    it("should be able to create user", async() => {
        const response = await request(app).post("/register").send({
            name: "Pedro",
            email: "pedro@email.com",
            password: "senha123"
        });

        console.log(response.body);
    })
})

describe("Login user", () => {
    it("should be able to login user", async() => {
        const response = await request(app).post("/login").send({
            email: "lucas@email.com",
            password: "senha123"
        });

        console.log(response.body);
    })
})