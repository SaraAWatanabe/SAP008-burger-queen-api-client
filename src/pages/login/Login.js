import styles from './Login.modules.css'
import { NavLoginRegister } from '../../components/login_register/NavLoginRegister';
import {FormLogin} from '../../components/login_register/FormLogin'


function LoginPage(){
    return( 
        <div className={styles.conteinerLogin}>
            Login Page
          <img alt='logo' className='logo'/>
          <NavLoginRegister/>
          <FormLogin/>

        </div>
    );
}
export default LoginPage