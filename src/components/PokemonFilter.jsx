import React, { useContext } from 'react'
import { AppContext } from '../context'
import styles from './PokemonFilter.module.css'
const PokemonFilter = () => {
    const { data, formValue, handleChange, handleSubmit, refV } = useContext(AppContext)
    return (
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
            <label className={styles.label}>
                Pick your type of filter:
          <select className={styles.select} value={formValue} onChange={e => handleChange(e)}>

                    {data.map(item => {
                        return <option key={item} value={item}>{item}</option>
                    })}
                </select>
            </label>
            <input ref={refV} type="submit" value="submit" />
        </form>
    )
}

export default PokemonFilter
