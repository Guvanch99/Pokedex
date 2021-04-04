import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { AppContext } from '../context'
import { Link, useParams } from 'react-router-dom'
import styles from './Pokevolution.module.css'
const Pokevolution = () => {
    const { id } = useParams()
    const { evoData, setevoData } = useContext(AppContext)

    let evoChain = [];





    useEffect(() => {
        async function fetchData() {
            {/*This url work with only first level kid pokemons */ }
            await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`).then(res => {
                let evoData = res.data.chain
                do {
                    let numberOfEvolutions = evoData.evolves_to.length;
                    evoChain.push({
                        "species_name": evoData.species.name,

                    });

                    if (numberOfEvolutions > 1) {
                        for (let i = 1; i < numberOfEvolutions; i++) {
                            evoChain.push({
                                "species_name": evoData.evolves_to[i].species.name,

                            });
                        }
                    }

                    evoData = evoData['evolves_to'][0];


                } while (!!evoData && evoData.hasOwnProperty('evolves_to'));


                return setevoData(evoChain)
            })
        }
        fetchData();
    }, [id])
    console.log(evoData)
    return (
        <div className={styles.container}>

            <p className={styles.id} >{id}</p>
            {evoData.map(data => {
                return (
                    <ul>
                        <li>{data.species_name}</li>
                    </ul>
                )
            })}
            <h1 style={{ color: "green" }}>If you doesnt pressed child pokemon you wont see evolution list</h1>
            <Link className={styles.link} to="/">
                Back home
            </Link>
        </div>
    )
}

export default Pokevolution
