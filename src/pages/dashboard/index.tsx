import Card from '@/components/Card'
import React from 'react'
import styles from '../styles/dashboard.module.css'
import { Icons } from '@/assets/Icons'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/images/logo-placeholder.png'

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
                        <p>Total number of transactions</p>
                                  
                    </DashboardCard>
                    <DashboardCard className={`${styles.main_card} ${styles.card_2}`}>
                        <p>Total income (last 30 days)</p>

                    </DashboardCard>
                    <DashboardCard className={`${styles.main_card} ${styles.card_3}`}>
                        <p>Total users (last 30 days)</p>
                    </DashboardCard>
                    <DashboardCard className={`${styles.main_card} ${styles.card_4}`}>
                        <p>Todo items completed last week</p>
                    </DashboardCard>
                    <DashboardCard className={`${styles.main_card} ${styles.card_5}`}>
                        <p>Total Todos remaining</p>
                    </DashboardCard>
                    <DashboardCard className={`${styles.main_card} ${styles.card_6}`}>
                        <p>Todos added (last 30 days)</p>
                    </DashboardCard>
                    <DashboardCard className={`${styles.main_card} ${styles.card_7}`}>
                        <p>Todos overdue (last 30 days)</p>
                    </DashboardCard>
                    <DashboardCard className={`${styles.main_card} ${styles.card_8}`}>
                        <p>Acquisitions per month (last 12 months)</p>
                    </DashboardCard>
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

function DashboardCard(props: DashboardCardProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

type DashboardCardProps = {
    className?: string,
    children?: React.ReactNode
}