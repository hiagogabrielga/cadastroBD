import express from "express";
import cors from 'cors'

import { mostrarUsuarios } from "./servicos/comandosMostrarUsuarios.js";
import { cadastrarUsuario } from "./servicos/comandosPostarUsuarios.js"
import { validarDados } from "./validacao/valida.js"

const app = express()

app.use(cors())

app.use(express.json())

app.get('/usuarios', async (req, res) => {
    const resposta = await mostrarUsuarios()
    res.json(resposta)
})

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body

    const usuarioValido = validarDados(nome, email, telefone);

    if (usuarioValido.status) {
        await cadastrarUsuario(nome, email, telefone)
        res.status(204).end
    } else {
        res.status(400).send(usuarioValido.mensagem)
    }
})

app.listen(9000, () => {
    const data = new Date()
    console.log('Server iniciado com sucesso na rota 9000' + data)

})