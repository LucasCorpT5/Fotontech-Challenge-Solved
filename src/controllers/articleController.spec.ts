import app from "../server"
import request from "supertest";

describe("Create article", () => {
    it("should be able to create article", async() => {
        const response = await request(app).post("/article/create").send({
            name: "Artigo 1",
            content: "Conteudo do artigo 1"
        }).set("Authorization", "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlNTJhODIyLTZhMWMtNDY1ZC05ZDBiLTg3ZDExOTM3YjVmMCIsIm5hbWUiOiJMdWNhcyIsImVtYWlsIjoibHVjYXNAZW1haWwuY29tIiwiaWF0IjoxNjg3MTE3NTUyLCJleHAiOjE2ODcyMDM5NTJ9.oLDM0C9_2So0L1JjgtR2IttHVaUVucB43jmUVoZh5KU");

        expect(response.statusCode).toBe(201);
        console.log(response.body);
    })
})

describe("List all articles", () => {
    it("should be able to list articles", async() => {
        const response = await request(app).get("/article/all").set("Authorization", "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlNTJhODIyLTZhMWMtNDY1ZC05ZDBiLTg3ZDExOTM3YjVmMCIsIm5hbWUiOiJMdWNhcyIsImVtYWlsIjoibHVjYXNAZW1haWwuY29tIiwiaWF0IjoxNjg3MTE3NTUyLCJleHAiOjE2ODcyMDM5NTJ9.oLDM0C9_2So0L1JjgtR2IttHVaUVucB43jmUVoZh5KU");

        expect(response.statusCode).toBe(200);
        console.log(response.body);
    })
})

describe("List all articles", () => {
    it("should be able to list articles", async() => {
        const response = await request(app).get("/article/015e0e2c-b023-4ef7-be49-47c0c0246040").set("Authorization", "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlNTJhODIyLTZhMWMtNDY1ZC05ZDBiLTg3ZDExOTM3YjVmMCIsIm5hbWUiOiJMdWNhcyIsImVtYWlsIjoibHVjYXNAZW1haWwuY29tIiwiaWF0IjoxNjg3MTE3NTUyLCJleHAiOjE2ODcyMDM5NTJ9.oLDM0C9_2So0L1JjgtR2IttHVaUVucB43jmUVoZh5KU");

        expect(response.statusCode).toBe(200);
        console.log(response.body);
    })
})