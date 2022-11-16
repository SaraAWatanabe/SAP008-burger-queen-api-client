import styles from './Header.module.css'
import Logo from '../../img/Logo.png'

export function Header(){
    return(
        <div className={styles.header}>
            <img alt="logo" src={Logo}/>
        </div>
    );
}