import React from 'react'
import cn from "classnames"

import styles from "../styles/header.module.sass"

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <span className={cn(styles.text, styles.active)}>Marvel</span>
        <span className={styles.text}> information portal</span>
      </div>
      <div>
        <span className={cn(styles.text, styles.active)}>Characters</span>
        <span className={styles.delimeter}>/</span>
        <span className={styles.text}>Comics</span>
      </div>
    </div>
  )
}


export default Header