import React, { MouseEventHandler } from 'react'
import styles from './styles/card.module.css'
import Button from './Button'

export default function Card(props: CardProps): JSX.Element {
    return (
        <div className={styles.card_container}>
            <div className={styles.card_icon_container}>{props.icon}</div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            {props.buttonText && <Button className={styles.card_button} onClick={props.action}>{props.buttonText}</Button>}
        </div>
    )
}

type CardProps = {
    icon?: JSX.Element,
    title?: string,
    content?: string,
    buttonText?: string,
    action?: MouseEventHandler<Element>
}