import React from 'react'
import styles from '../styles/password.module.css'
import { useSupabase } from '@/hooks/useSupabase'

export default function UpdatePassword() {
    const [newPassword, setNewPassword] = React.useState<string>('')
    const [confirm, setConfirm] = React.useState<string>('')
    const [user, session, loading, error, supabase] = useSupabase()

    function resetPassword() {
        if (newPassword) {
            supabase.resetPassword(newPassword)
        }
    }

    return (
        <div className={styles.page_background}>
            <form className={styles.page_container} onSubmit={resetPassword}>
                <h2>Reset Password</h2>
                <p>Please enter a new password for your account and re-type it to confirm.</p>
                <label htmlFor='password'>New Password</label>
                <input id='password' type='text' value={newPassword} maxLength={15} onChange={(e) => setNewPassword(e.target.value)} />

                <label htmlFor='password'>Confirm Password</label>
                <input id='password' type='text' pattern={`${newPassword}`} title='Password must match' maxLength={15} value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                    
                <input className={styles.page_button} type='submit' value="Reset Password" />
            </form>
        </div>
    )
}