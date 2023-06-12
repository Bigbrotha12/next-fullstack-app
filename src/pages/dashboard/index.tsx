import React from 'react'
import styles from '../styles/dashboard.module.css'
import { Icons } from '@/assets/Icons'
import Logo from '@/assets/images/logo-placeholder.png'
import Link from 'next/link'
import Image from 'next/image'
import Chart from '@/components/Chart'
import Card from '@/components/Card'
import DashboardCard from '@/components/DashboardCard'

const menuItems: Array<MenuListProps> = [
    { title: "Menu", icon: <Icons.Approval /> },
    { title: "UI Elements", icon: <Icons.Fort /> },
    { title: "Widget", icon: <Icons.Shield /> },
    { title: "Forms", icon: <Icons.Support /> },
    { title: "Charts", icon: <Icons.KeyboardVoice /> },
    { title: "Charts", icon: <Icons.School /> },
    { title: "Charts", icon: <Icons.Fort /> },
    { title: "Charts", icon: <Icons.Build /> },
]

export default function Dashboard(): JSX.Element {
    
    return (
        <div className={styles.dashboard_container}>
            <div className={styles.dashboard_sidebar}>
                {/* <div className={styles.sidebar_header}>sidebar header</div> */}
                <div className={styles.sidebar_menu_container}>
                    <div className={styles.sidebar_logo_container}>
                        <Image priority={true} placeholder='blur' src={Logo} width='64' height='64' alt='logo' />
                        <h2>Logo</h2>
                    </div>
                    <div>
                        {menuItems.map(list => {
                            return (
                                <MenuList key={list.title} {...list} />
                            )
                        })}
                    </div>
                    <div className={`${styles.menu_item} ${styles.sidebar_logout}`}>
                        <Icons.Logout />
                        <p>Logout</p>
                    </div>
                </div>
            </div>

            <div className={styles.dashboard_main}>
                <div className={styles.main_header}>
                    <div className={styles.profile_data}>
                        <div className={styles.profile_text}>
                            <p>Rafael Mendoza</p>
                            <p>Admin</p>
                        </div>
                        
                        <Image placeholder='blur' src={Logo} width='44' height='44' alt='logo' />
                    </div>
                </div>
                <div className={styles.main_banner}>Info Banner</div>
                <div className={styles.main_grid_container}>
                    <DashboardCard className={`${styles.main_card} ${styles.card_1}`}>
                        
                    </DashboardCard>
                    {/* <DashboardCard className={`${styles.main_card} ${styles.card_2}`} />
                    <DashboardCard className={`${styles.main_card} ${styles.card_3}`} />
                    <DashboardCard className={`${styles.main_card} ${styles.card_4}`} />
                    <DashboardCard className={`${styles.main_card} ${styles.card_5}`} />
                    <DashboardCard className={`${styles.main_card} ${styles.card_6}`} />
                    <DashboardCard className={`${styles.main_card} ${styles.card_7}`} />
                    <DashboardCard className={`${styles.main_card} ${styles.card_8}`} /> */}
                </div>
                
            </div>
        </div>
    )
}

function MenuList(props: MenuListProps): JSX.Element {
    return (
        <div className={styles.menu_item}>
            {props.icon}
            <h4 className={styles.menu_title}>{props.title}</h4>
        </div>
    )
}

type MenuListProps = {
    title: string,
    icon: JSX.Element
} 

