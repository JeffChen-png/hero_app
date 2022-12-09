import React from 'react'

import styles from '../styles/header.module.sass'

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <span className={styles.active}>Marvel</span>
                <span> information portal</span>
            </div>
            <div className={styles.right}>
                <span className={styles.active}>Characters</span>
                <span> / </span>
                <span>Comics</span>
            </div>
        </div>
    )
}

export default Header
