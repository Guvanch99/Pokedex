import React, { useContext, useState } from 'react'
import styles from './Pokemon.module.css'
import ColorPokes from './ColorPokes'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom'
const Pokemon = ({ data }) => {
    const [show, setShow] = useState(false)
    return (
        <>


            <div key={data.id} className={styles.container}>

                <div className={styles.firstCon}>
                    <h2 > № {data.id} Exp: {data.base_experience}</h2>
                    <Link to={`/${data.id}`}><img className={styles.img} src={data.sprites.other.dream_world.front_default} alt={data.name} /></Link>
                    <button className={styles.buttonShow} onClick={() => setShow(!show)}>{show ? "HideStats" : "ShowStats"}</button>
                </div>
                <div className={styles.secondCon}>

                    <h1 key={data.name}>{data.species.name}</h1>
                    <h4>Type:</h4>
                    <div className={styles.type}>
                        {data.types.map(x => {

                            return <div key={x.type.name} style={{ background: ColorPokes[x.type.name] }}>{x.type.name}</div>
                        })}
                    </div>
                    <h4>Height:
                        </h4>
                    <p>{data.height / 10}meter</p>
                    <h4>Weight: </h4>
                    <p>{data.weight / 10}kg</p>

                    <h4>Abilities:</h4>
                    <div>
                        {data.abilities.map((item) => {

                            return (
                                <p key={item.ability.name}>{item.ability.name}</p>
                            )
                        })}
                    </div>
                </div>

                {show && <div className={styles.thirdCon}>

                    <h1 style={{ color: "white" }} >Basic Stats</h1>
                    {data.stats.map(item => {


                        return (
                            <div key={item.id} className={styles.types}>
                                <p key={item.id} style={{ color: "white" }}  >{item.stat.name}</p>



                                <ProgressBar key={item.id} completed={item.base_stat} />

                            </div>

                        )
                    })}
                </div>}
            </div>
        </>
    )
}

export default Pokemon
