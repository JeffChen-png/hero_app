import React from 'react'
import cn from 'classnames'

import styles from '../styles/button.module.sass'
type ButtonProps = {
    title?: string
    text: string
    className?: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            title={props.title}
            className={cn(props.className, styles.button)}
        >
            {props.text}
        </button>
    )
}

export default Button
