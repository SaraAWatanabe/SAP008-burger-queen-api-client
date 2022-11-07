import { useState } from "react";
import styles from "./FormLogin.module.css";

// colocar a função de navegação
function eventLogin(event) {
  event.preventDefault();
  console.log(`Usuário ${emailLogin} foi logado com a senha: ${passwordLogin}`);
  console.log("Navegue para a home!");
}

const [emailLogin, setEmail] = useState()
const [passwordLogin, setPassword] = useState()

export function FormLogin() {
  return (
    <form onSubmit={eventLogin} className={styles.FormLoginContainer}>
      <label htmlFor="emailLogin">Nome:</label>
      <input
        className={styles.input}
        id="emailLogin"
        type="text" 
        name="email"
        value={emailLogin}
        placeholder="Insira seu email aqui"
        onChange={(e)=> setEmail(e.target.value)}
      />
      <label htmlFor="passwordLogin">Senha:</label>
      <input
        className={styles.input}
        id="passwordLogin"
        type="password"
        name="password"
        value={passwordLogin}
        placeholder="Insira sua senha"
        onChange={(e)=> setPassword(e.target.value)}
      />
      <button className={styles.btn} type="submit">
        Login
      </button>
    </form>
  );
}
