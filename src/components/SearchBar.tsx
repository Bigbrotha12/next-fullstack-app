import React from 'react';
import { Icons } from "@/assets/Icons"
import styles from './styles/search.module.css'

export default function SearchBar(props: {}): JSX.Element {
    const [searchText, setSearchText] = React.useState<string>('');

    return (
        <div className={styles.bar}>
            <input type="text" name="searchbar" placeholder="Search Bar" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <Icons.Search />
        </div>
    )
}