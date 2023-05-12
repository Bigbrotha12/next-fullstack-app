import React from 'react'
import styles from './styles/grid.module.css'

export default function Grid(props: GridProps): JSX.Element {
    return (
        <div className={styles.grid_container}>
            {props.elements}
        </div>
    )
}

type GridProps = {
    className?: string,
    columns: number,
    elements: Array<JSX.Element>,
}