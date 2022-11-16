import { NavLoginRegister } from "../../components/loginRegister/NavLoginRegister";
import styles from "./Register.module.css";
import {FormRegister} from "../../components/loginRegister/FormRegister"

export function RegisterPage() {
  return <div className={styles.conteinerRegister}>
    <NavLoginRegister/>
    <FormRegister></FormRegister>
  </div>;
}
