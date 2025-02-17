import express from "express";
import cors from 'cors'

import { mostrarUsuarios } from "./servicos/comandosMostrarUsuarios.js";

const app = express()

app.use(cors())

app.get('/usarios', async (req, res) => {
    const resposta = mostrarUsuarios()
    res.json(resposta)
})

app.listen(9000, () => {
    const data = new Date()
    console.log('Server iniciado com sucesso na rota 9000' + data)

})