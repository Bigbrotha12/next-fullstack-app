import React from 'react'
import styles from './styles/section.module.css'

export default function Section(props: SectionProps) {
    return (
        <div className={props.className ? `${props.className} ${styles.section_container}` : styles.section_container}>
            <h1>{props.heading}</h1>
            <h5>{props.subheading}</h5>
            <div className={styles.section_content}>{props.children}</div>
        </div>
    )
}

type SectionProps = {
    className?: string,
    heading?: string,
    subheading?: string,
    icon?: JSX.Element,
    children: React.ReactNode
}