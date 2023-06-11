import { LineChart, Line } from 'recharts';
import React from 'react';
import styles from './styles/chart.module.css'

const data = [
    { name: 'Page A', uv: 200, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 450, pv: 1400, amt: 1400 },
    { name: 'Page C', uv: 300, pv: 2500, amt: 2500 },
    { name: 'Page D', uv: 320, pv: 2200, amt: 2200 },
    { name: 'Page E', uv: 220, pv: 100, amt: 100 },
    { name: 'Page F', uv: 410, pv: 2600, amt: 2600 },
];

export default function Chart() {
    return (
        <LineChart className={styles.line_chart} height={150} width={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
    )
}