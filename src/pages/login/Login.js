import styles from './Login.module.css'
import { NavLoginRegister } from '../../components/loginRegister/NavLoginRegister';
import {FormLogin} from '../../components/loginRegister/FormLogin'


export function LoginPage(){
    return( 
        <div className={styles.containerLogin}>
          <NavLoginRegister/>
          <FormLogin/>
        </div>
    );
}
