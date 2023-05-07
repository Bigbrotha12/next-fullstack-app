import styles from './styles/button.module.css';

export default function Button(props: {
    className?: string,
    startIcon?: JSX.Element,
    endIcon?: JSX.Element,
    onClick?: React.MouseEventHandler,
    children: React.ReactNode
}): JSX.Element {
    return (
        <button className={props.className || styles.button}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px'}}>
                {props.startIcon}
                {props.children}
            </div>
            
        </button>
    )
}