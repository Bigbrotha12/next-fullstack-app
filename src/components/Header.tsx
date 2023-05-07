import React from "react"
import Button from "./Button"
import styles from "./styles/navigator.module.css";
import Link from "next/link";

export default function Header(props: HeaderProps): JSX.Element {
    return (
        <nav className={styles.navigator}>
            <div className={styles.navigation_logo}>{props.logo}</div>
            <div className={styles.navigation_nav}>
                {
                    props.navigation?.map((item, index) => {
                        return (
                            <div key={index}>{item}</div>
                        )
                    })
                }
            </div>
            <div className={styles.navigation_options}>
                {
                    props.options?.map((item, index) => {
                        return (<div key={index}>{item}</div>)
                    })
                }
            </div>
            <div className={styles.navigation_login}>
                <Link href="/login"><Button>{props.endButton}</Button></Link>
            </div>
        </nav>
    )
}

type HeaderProps = {
    className?: string,
    logo?: JSX.Element,
    navigation?: Array<string>,
    searchBar?: JSX.Element,
    options?: Array<JSX.Element>,
    endButton?: string
}