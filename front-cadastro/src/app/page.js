'use client'
import { useState } from "react";
import styles from "./page.module.css"

export default function UsuarioForm() {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:9000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={styles.formulario}>
          <div className={styles.campoInputs}>
            <div>
              <label>Nome:</label>
              <input type="text" name="nome" placeholder="seu nome" value={formData.nome} onChange={handleChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" placeholder="seuEmail@gmail.com" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label>Telefone:</label>
              <input type="tel" name="telefone" placeholder="(xx) xxxxx-xxxx" value={formData.telefone} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className={styles.botaoEnv}>Enviar</button>
        </form>
      </div>
    </div>

  );
}
