import Card from '@/components/Card'
import React from 'react'
import styles from '../../styles/dashboard.module.css'

export default function Dashboard() {
    return (
        <div className={styles.dashboard_container}>
            <Card>
                Inside Card
            </Card>
            <Card>
                Inside Card
            </Card>
            <Card>
                Inside Card
            </Card>
            <Card>
                Inside Card
            </Card>
        </div>
    )
}

