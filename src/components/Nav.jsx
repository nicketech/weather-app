import React from 'react';
import styles from '../styles/Nav.module.css'
import SearchBar from './SearchBar';


export default function Nav ({onSearch}) {
    return (
    <div className={styles.container}>
        <div className={styles.brand}>
            <div className={styles.logo}></div>
            <p>Wheater App by Nick</p>
        </div>
        <div className={styles.search}>
        <SearchBar 
            onSearch={onSearch}
        /> 
        </div>
    </div>
    )
}
