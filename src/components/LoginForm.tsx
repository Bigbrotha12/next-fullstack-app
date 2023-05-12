import React from 'react';
import styles from './styles/login.module.css'
import Link from 'next/link';
import Button from './Button';
import { Icons } from '@/assets/Icons';

import { useSupabase } from '@/hooks/useSupabase'
import Modal from './Modal';
import { Material } from '@/assets/Material';

export default function LoginForm(props: LoginFormProps): JSX.Element {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [user, session, loading, error, supabase] = useSupabase()

    function signIn() {
        setModalOpen(true);
        if (username && password) {
            supabase.signInWithEmail(username, password)
        }
    }

    React.useEffect(() => {
        if (user && session) {
            window.location.href = "/dashboard"
        }
        
    }, [user, session])

    return (
        <div className={styles.form_container} >
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); signIn(); }}>
                {props.logo}
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <div className={styles.form_oauth}>
                    <Button className={styles.form_button} startIcon={<Icons.Facebook />}>Continue with Facebook</Button>
                    <Button className={styles.form_button} startIcon={<Icons.Google />}>Continue with Google</Button>
                </div>
                <hr style={{width: '100%'}}/>
                <fieldset className={styles.form_fieldset}>
                    <legend className={styles.form_legend}>Log In</legend>
                    <div>
                    <label className={styles.form_label} htmlFor='username-input'>Email</label>
                    <input id='username-input' type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span><label className={styles.form_label} htmlFor='password-input'>Password</label></span>
                        <span><Link className={styles.form_forgot_button} href={"/register"}>Forgot Password?</Link></span>
                    </div>
                    <input id='password-input' type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className={styles.form_button} type="submit">Log In</button>
                    </div>
                </fieldset>
                
                <p className={styles.register_text}>Don&apos;t have an account? <span><Link className={styles.register_button} href="/register">Register Here</Link></span></p>
                <small className={styles.small_print}>By continuing, you agree to this site&apos;s <Link className={styles.form_forgot_button} href={"/register"}>Terms of Service</Link> and <Link className={styles.form_forgot_button} href={"/register"}>Privacy Policy</Link>, and to receive periodic emails with updates.</small>
            </form>
            
            <div className={`${styles.aside} large`}>
                <div className={styles.side_content}>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum itaque ad ut iusto magnam ab delectus similique? Nulla blanditiis officia voluptates inventore, at natus qui consequuntur deleniti eos sunt!</p>
                </div>
            </div>

            <Modal open={modalOpen} closeDispatch={setModalOpen}>
                {error ||
                    <React.Fragment>
                        <div>
                            <Material.CircularProgress />
                        </div>
                        <p>Verifying credentials. Please wait...</p>
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