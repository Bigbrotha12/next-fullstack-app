import React from 'react'
import styles from '../styles/password.module.css'
import Link from 'next/link'

export default function ForgotPassword() {
    return (
        <div className={styles.page_background}>
            <form className={styles.page_container}>
                <h2>Password Reset</h2>
                <p>Enter your account&apos;s email address and, if registered, you will receive e-mail to reset your password.</p>
                <label htmlFor='email'>Email Address</label>
                <input id='email' type='text' maxLength={20} placeholder="Email" />
                    
                <input className={styles.page_button} type='submit' value="Send Reset Link" />
                <button className={styles.return_button} type='button'><Link href='/login'>Return to Log In</Link></button>
            </form>
        </div>
    )
}