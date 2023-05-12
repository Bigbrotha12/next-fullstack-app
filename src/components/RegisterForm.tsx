import React from 'react';
import styles from './styles/login.module.css'
import Link from 'next/link';

import { useSupabase } from '@/hooks/useSupabase'
import Modal from './Modal';
import { Material } from '@/assets/Material';

export default function RegisterForm(props: LoginFormProps): JSX.Element {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [username, setUsername] = React.useState<string>('');
    const [address, setAddress] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>('');
    const [user, session, loading, error, supabase] = useSupabase()

    function signUp(event: any) {
        event.preventDefault()
        setModalOpen(true);
        if (password != passwordConfirm) {
            return
        }
        
        if (username && password) {
            supabase.signUpWithEmail(username, password)
        }
        console.log(error)
    }

    React.useEffect(() => {
        if (user && session) {
            window.location.href = "/dashboard"
        }
        
    }, [user, session])

    return (
        <div className={styles.form_container} >
            <form className={styles.form} onSubmit={signUp}>
                {props.logo}
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                
                <hr style={{width: '100%'}}/>
                <fieldset className={styles.form_fieldset}>
                    <legend className={styles.form_legend}>Register</legend>
                    <div>
                        <label className={styles.form_label} htmlFor='username-input'>Email</label>
                        <input id='username-input' type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>

                        <label className={styles.form_label} htmlFor='address-input'>Address</label>
                        <input id='address-input' type='text' placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            
                        <label className={styles.form_label} htmlFor='password-input'>Password</label>
                        <input id='password-input' type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        
                        <label className={styles.form_label} htmlFor='password-repeat-input'>Confirm Password</label>
                        <input id='password-repeat-input' type='password' pattern={`${password}`} value={passwordConfirm} title='password do not match' placeholder="Password" onChange={(e) => setPasswordConfirm(e.target.value)}/>
                        
                        <button className={styles.form_button} type="submit">Sign Up</button>
                    </div>
                </fieldset>
                
                <p className={styles.register_text}>Already registered? <span><Link className={styles.register_button} href="/login">Sign In</Link></span> instead</p>
                <small className={styles.small_print}>By continuing, you agree to this site&apos;s <Link style={{fontSize: "inherit", textDecoration: "underline"}} href={"/register"}>Terms of Service</Link> and <Link style={{fontSize: "inherit", textDecoration: "underline"}}  href={"/register"}>Privacy Policy</Link>, and to receive periodic emails with updates.</small>
            </form>

            <Modal open={modalOpen} closeDispatch={setModalOpen}>
                {error ||
                    <React.Fragment>
                        <div>
                            <Material.CircularProgress />
                        </div>
                        <p>Registering account. Please wait...</p>
                    </React.Fragment>
                }
            </Modal>
        </div>
    )
}

type LoginFormProps = {
    title: string,
    subtitle: string,
    logo?: JSX.Element
}