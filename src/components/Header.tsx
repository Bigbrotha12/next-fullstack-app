import React from "react"
import Button from "./Button"
import styles from "./styles/navigator.module.css";

export default function Header(props: {
    className?: string,
    logo?: JSX.Element,
    navigation?: Array<string>,
    searchBar?: JSX.Element,
    options?: Array<JSX.Element>,
    endButton?: string
}): JSX.Element {
    return (
        <nav className={styles.navigator}>
            <div className={styles.logo}>{props.logo}</div>
            <div className={styles.navigation_nav}>
                {
                    props.navigation?.map((item, index) => {
                        return (
                            <div key={index}>{item}</div>
                        )
                    })
                }
            </div>
            <div className={styles.navigation_search}>{props.searchBar}</div>
            <div className={styles.navigation_options}>
                {
                    props.options?.map((item, index) => {
                        return (<div key={index}>{item}</div>)
                    })
                }
            </div>
            <div className={styles.navigation_login}>
                <Button>{props.endButton}</Button>
            </div>
            
        </nav>
    )
}