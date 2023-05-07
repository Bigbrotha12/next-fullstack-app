import Card from '@/components/Card'
import React from 'react'
import styles from '../styles/dashboard.module.css'

export default function Dashboard() {
    return (
        <div className={styles.dashboard_container}>
            <Card title='Card 1'/>
            <Card title='Card 2'/>
            <Card title='Card 3'/>
            <Card title='Card 4'/>
        </div>
    )
}

