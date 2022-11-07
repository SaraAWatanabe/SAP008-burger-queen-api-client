import styles from './FormRegister.module.css'

function registerUser(event){
    event.preventDefault();
    console.log("Você foi registrado!")
    //Usar a API
}

export function FormRegister (){
    return(
        <form className={styles.FormRegister} onSubmit={registerUser}>
            <input className={styles.input} type='text' name='name' placeholder='Insira seu nome'></input>
            <input className={styles.input} type='email' name='email' placeholder='Insira seu e-mail'></input>
            <input className={styles.input} type='password' name='password' placeholder='Insira sua senha'></input>
            <input className={styles.input} type='password' name='password' placeholder='Repita sua senha'></input>
            <button className={styles.btn} type='submit'>Cadastre-se</button>

        </form>
    );
}