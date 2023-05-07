import React from 'react'
import styles from './styles/card.module.css'

export default function Card(props: any): JSX.Element {
    return (
        <div className={styles.card_container}>
            {props.children}
        </div>
    )
}