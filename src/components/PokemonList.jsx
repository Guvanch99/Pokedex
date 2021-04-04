import React, { useContext } from 'react'
import { AppContext } from '../context'
import ButtonMove from './ButtonMove'
import Pokemon from './Pokemon'
import PokemonFilter from './PokemonFilter'
const PokemonList = () => {
    const { pokemons } = useContext(AppContext)
    return (
        <div>
            <PokemonFilter />
            {pokemons.map(data => {
                return <Pokemon key={data.id} data={data} />
            })}
            <ButtonMove />
        </div>
    )
}

export default PokemonList
