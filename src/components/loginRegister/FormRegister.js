import { useState } from "react";
import styles from "./FormRegister.module.css";
import { Button } from "./Button";

export function FormRegister() {
  function registerUser(event) {
    event.preventDefault();
    console.log("Você foi registrado!");
    //Usar a API
    console.log(`Usuário ${userName} foi cadastrado com o email ${emailRegister} e a senha ${passwordRegister}`)
  }
  const [userName, setName] = useState();
  const [emailRegister, setEmail] = useState();
  const [passwordRegister, setPassword] = useState();

  return (
    <form className={styles.FormRegister} onSubmit={registerUser}>
      <label htmlFor="userName">Nome:</label>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Insira seu nome"
        id="userName"
        value={userName}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label htmlFor="email"></label>
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="Insira seu e-mail"
        id="email"
        value={emailRegister}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label htmlFor="password"></label>
      <input
        className={styles.input}
        type="password"
        name="password"
        placeholder="Insira sua senha"
        id="password"
        value={passwordRegister}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        className={styles.input}
        type="password"
        name="password"
        placeholder="Repita sua senha"
        id="passwordRepeat"
      ></input>
      <Button type="submit" text="Cadastre-se"/>
    </form>
  );
}
