import React from 'react';
import styles from './styles/login.module.css'
import Link from 'next/link';
export default function LoginForm() {

    return (
        <div className={styles.form_container} >
            <form className={styles.form} onSubmit={() => alert("Logged In")}>
                <h2>Login Prompt</h2>
                <label htmlFor='username-input' />
                <input id='username-input' name='username-input' type='text' placeholder="Username" />
                <input type='password' placeholder="Password" />
                <input className={styles.form_button} type="submit" value="Log In" />
                <Link className={styles.register_button} href={"/register"}>Register</Link>
            </form>
            
        </div>
    )

}