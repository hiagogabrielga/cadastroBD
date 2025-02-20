'use client'
import { useState } from "react";
import styles from "./page.module.css"

export default function UsuarioForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);


  const handletelefoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}${value.length > 7 ? "-" + value.slice(7, 11) : ""}`;
    }
    setTelefone(value); // Atualiza o estado com o valor formatado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro("");
    setSucesso("");

    const cadastroData = {
      nome: nome,
      email: email,
      telefone: telefone,
    };

    try {
      const res = await fetch("http://localhost:9000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastroData),
      });

      if (!res.ok) {
        throw new Error("Erro ao cadastrar usuário!");
      }

      const contentType = res.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        setSucesso("Usuário cadastrado com sucesso!");
        console.log("Usuário cadastrado", data);
      } else {
        setSucesso("Usuário cadastrado com sucesso!");
      }

      setNome("");
      setEmail("");
      setTelefone("");
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1>cadastrado</h1>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <div className={styles.campoInputs}>
            <div>
              <label>Nome:</label>
              <input type="text" name="nome" placeholder="seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" placeholder="seuEmail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Telefone:</label>
              <input type="tel" name="telefone" placeholder="(xx) xxxxx-xxxx" value={telefone} onChange={handletelefoneChange} />
            </div>
          </div>
          <button type="submit" className={styles.botaoEnv}>Enviar</button>
        </form>
      </div>
    </div>

  );
}
