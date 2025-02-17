import pool from './conexao.js'

async function mostrarUsuarios() {
    const conexao = pool.getConnection();
    const query = `SELECT * FROM usuarios`;
    const [resultado] = await conexao.execute(query);
    return resultado;
}

export { mostrarUsuarios };