import React from 'react'
import cn from 'classnames'

import { Character } from '../types'
import Button from '../ui/Button'

import styles from '../styles/randomCharacter.module.sass'

type RandomCharacterProps = {
    character?: Character
}

const RandomCharacter: React.FC<RandomCharacterProps> = (props) => {
    const setLoading = () => {}

    return (
        <div className={styles.randomCharacter}>
            <div className={styles.left}>
                <img
                    alt={props.character?.name}
                    src={
                        'https://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg' ||
                        props.character?.thumbnail.path +
                            '.' +
                            props.character?.thumbnail.extension
                    }
                    onLoad={setLoading}
                    height={180}
                    width={180}
                    className={styles.image}
                />
                <h2>{props.character?.name || 'Thor'}</h2>
                <span>
                    {props.character?.description ||
                        "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause."}
                </span>
                <div className={styles.buttons}>
                    <Button
                        title="homepage"
                        text="HOMEPAGE"
                        className={styles.buttonBackground}
                    />
                    <Button title="wiki" text="WIKI" />
                </div>
            </div>
            <div className={styles.right}>
                <h2>
                    Random character for today! Do you want to get to know him
                    better?
                </h2>
                <h2>Or choose another one</h2>
                <Button
                    title="try it"
                    text="TRY IT"
                    className={cn(styles.button, styles.buttonBackground)}
                />
            </div>
        </div>
    )
}

export default RandomCharacter
