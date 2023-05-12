import React from 'react'
import styles from './styles/modal.module.css'

export default function Modal(props: ModalProps) {

    return (
        <div className={props.open ? styles.modal_open : styles.modal_closed} onClick={() => props.closeDispatch(false)}>
            <div className={styles.modal_box}>
                {props.children}
            </div>
        </div>
    )
}

type ModalProps = {
    open: boolean,
    closeDispatch: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}