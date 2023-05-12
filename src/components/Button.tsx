import styles from './styles/button.module.css';

export default function Button(props: ButtonProps): JSX.Element {
    return (
        <button className={props.className ? `${props.className} ${styles.button}` : styles.button}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
                {props.startIcon}
                {props.children}
            </div>
        </button>
    )
}

type ButtonProps = {
    className?: string,
    startIcon?: JSX.Element,
    endIcon?: JSX.Element,
    onClick?: React.MouseEventHandler,
    children: React.ReactNode
}