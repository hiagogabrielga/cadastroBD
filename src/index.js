import express from "express";
import cors from 'cors'

import { mostrarUsuarios } from "./servicos/comandosMostrarUsuarios.js";
import { cadastrarUsuario } from "./servicos/comandosPostarUsuarios.js"
import { validarUsuario } from "./validacao/validacao.js"

const app = express()

app.use(cors())

app.use(express.json())

app.get('/usuarios', async (req, res) => {
    const resposta = await mostrarUsuarios()
    res.json(resposta)
})

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body
    await cadastrarUsuario(nome, email, telefone)

    res.status(204).send("tudo certo")
})

app.listen(9000, () => {
    const data = new Date()
    console.log('Server iniciado com sucesso na rota 9000' + data)

})