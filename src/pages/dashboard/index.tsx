import Card from '@/components/Card'
import React from 'react'
import styles from '../styles/dashboard.module.css'
import { Icons } from '@/assets/Icons'
import Link from 'next/link'
import Chart from '@/components/Chart'

const menuItems: Array<MenuListProps> = [
    {
        title: "Menu",
        items: [
            ["Example", "./example"],
            ["Another", "./example"]
        ]
    },
    {
        title: "UI Elements",
        items: [
            ["Elements", "./example"],
            ["Components", "./example"],
            ["Tables", "./example"]
        ]
    },
    {
        title: "Widget",
        items: [
            ["Apps", "./example"]
        ]
    },
    {
        title: "Forms",
        items: [
            ["Controls", "./example"],
            ["Layouts", "./example"],
            ["Validation", "./example"]
        ]
    },
    {
        title: "Charts",
        items: [
            ["Tables", "./example"],
            ["Graphs", "./example"]
        ]
    },
]

export default function Dashboard(): JSX.Element {
    return (
        <div className={styles.dashboard_container}>
            <div className={styles.dashboard_sidebar}>
                {/* <div className={styles.sidebar_header}>sidebar header</div> */}
                <div className={styles.sidebar_menu_container}>
                    {menuItems.map(list => {
                        return (
                            <MenuList key={list.title} {...list} />
                        )
                    })}
                </div>
            </div>

            <div className={styles.dashboard_main}>
                <div className={styles.main_header}></div>
                <div className={styles.main_banner}>Info Banner</div>
                <div className={styles.main_grid_container}>
                    <DashboardCard className={`${styles.main_card} ${styles.card_1}`}>
                        <div className={styles.card_header}>
                            <Icons.ArrowForward />
                            <h3>Bandwidth Report</h3>
                        </div>
                        <hr />
                        <div className={styles.card_content}>
                            <p>Item 1</p>
                            <p>Item 2</p>
                            <p>Item 3</p>
                            <p>Item 4</p>
                        </div>
                        <Chart />
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
        <React.Fragment>
            <h4 >{props.title}</h4>
            <ul>
            {props.items.map( ([label, target]) => {
                return (
                    <li className={styles.menu_item} key={label} >
                        <Link href={target}>{label}</Link>
                    </li>
                )
            })}
            </ul>
        </React.Fragment>
    )
}

type MenuListProps = {
    title: string,
    items: Array<[string, string]>
} 

function DashboardCard(props: DashboardCardProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

type DashboardCardProps = {
    className: string,
    children?: React.ReactNode
}