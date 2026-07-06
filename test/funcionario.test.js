const request = require("supertest")

const app = require("../src/app")

describe("Api de funcionarios" , ()=>{
    it("Deve cadastrar um funcionario" , async()=>{
        const resposta = await request(app)
        .post("funcionarios")
        .send({
            nome: "Maria",
            cargo: "Analista"
        })

        espect(resposta.statusCode.toBe(201))
        espect(resposta.body.nome).toBe("Maria")
        espect(resposta.body.cargo).toBe("Analista")
    })
})