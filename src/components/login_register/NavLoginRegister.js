import styles from './NavLoginRegister.module.css'

export function NavLoginRegister (){
    return(
        <div className={styles.navLoginRegisterContainer}>
            <button className={styles.btnNav}>Login</button>
            <button className={styles.btnNav}>Register</button>
        </div>
    );
}
