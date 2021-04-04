import React, { useContext } from 'react'
import styles from './ButtonMove.module.css'
import { AppContext } from '../context'
const ButtonMove = () => {
    const { handleUrl, prevPage, nextPage } = useContext(AppContext)

    return (

        <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={() => handleUrl(prevPage)}><i className={`fas fa-chevron-left fa-3x`}></i></button>
            <button className={styles.btn} onClick={() => handleUrl(nextPage)}><i className={`fas fa-chevron-right fa-3x`}></i></button>
        </div>


    )
}

export default ButtonMove
