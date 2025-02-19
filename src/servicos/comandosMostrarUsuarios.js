import pool from './conexao.js'

async function mostrarUsuarios() {
    const conexao = await pool.getConnection();
    const query = `SELECT * FROM usuarios`;
    const resultado = await conexao.query(query);
    return resultado[0];
}

export { mostrarUsuarios };