import styles from "./NavLoginRegister.module.css";
import { Button } from "./Button";

export function NavLoginRegister() {
  return (
    <div className={styles.navLoginRegisterContainer}>
      <Button text="Login" customClass="btn-nav" id="btnNavLogin"/>
      <Button text="Cadastro" customClass="btn-nav" id="btnNavCadastro"/>
    </div>
  );
}
