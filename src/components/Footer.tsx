import React from 'react'
import styles from './styles/footer.module.css'
import Logo from '@/assets/images/logo-placeholder.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.footer_container} >
            <div className={styles.footer_front}>
                <Image priority={true} placeholder='blur' src={Logo} width='64' height='64' alt='logo' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, facere itaque dicta, temporibus voluptas natus sed hic iure modi eius vero. Nulla, placeat pariatur. Ea veniam quam nesciunt iure vero?</p>
            </div>

            <div className={styles.footer_column}>
                <ul>
                    <h3>Resources</h3>
                    <li>Application</li>
                    <li>Documentation</li>
                    <li>Systems</li>
                    <li>FAQ</li>
                </ul>
            </div>

             <div className={styles.footer_column}>
                <ul>
                    <h3>Pricing</h3>
                    <li>Overview</li>
                    <li>Premium Plans</li>
                    <li>Affiliate Programs</li>
                    <li>Promotions</li>
                </ul>
            </div>

             <div className={styles.footer_column}>
                <ul>
                    <h3>Company</h3>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>

             <div className={styles.footer_column}>
                <ul>
                    <h3>Social</h3>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Discord</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            
        </div>
    )
}