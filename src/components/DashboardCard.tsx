import React from 'react'
import Chart from './Chart'

export default function DashboardCard(props: DashboardCardProps) {
    return (
        <div className={props.className}>
            {/*Pie chart */}
            <Chart />
            <div>
                <p>Total number of transactions</p>
                {/*Line chart */}
                <Chart />
            </div>
        </div>
    )
}

type DashboardCardProps = {
    className: string,
    children?: React.ReactNode
}