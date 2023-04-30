import { Material } from "@/assets/Material";
import styles from './styles/button.module.css';

export default function Button(props: {
    className?: string,
    startIcon?: JSX.Element,
    endIcon?: JSX.Element,
    onClick?: React.MouseEventHandler,
    children: React.ReactNode
}): JSX.Element {
    return (
        <button className={styles.button}>
            {props.children}
        </button>
    )
}