import { Icons } from "@/assets/Icons"
import styles from './styles/search.module.css'

export default function SearchBar(props: {}): JSX.Element {
    return (
        <div className={styles.bar}>
            <p>Search Bar</p>
            <Icons.Search />
        </div>
    )
}