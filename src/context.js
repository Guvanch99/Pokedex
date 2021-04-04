import React, { useEffect, useState, useRef, useMemo } from 'react'
import axios from 'axios'
import { data } from './components/dataEl'
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    //data
    const [pokemons, setPokemons] = useState([])
    //Loading
    const [loading, setLoading] = useState(true)
    //pageing next 
    const [nextPage, setNextPage] = useState()
    //pageing back
    const [prevPage, setPrevPage] = useState()
    const [formValue, setFormValue] = useState('')
    const [evoData, setevoData] = useState([])
    const refV = useRef()
    const datafetch = async () => {
        let promises = [];
        let promises1 = [];
        if (url) {
            let res = await axios.get(url)
            console.log(res)
            setPrevPage(res.data.prevPage)
            setNextPage(res.data.next)
            let results = res.data.results
            results.forEach(result => {
                promises.push(axios.get(result.url))
            })
            await Promise.all(promises).then(e => {
                e.map(data => {
                    return promises1.push(data.data)
                })
            })
            setPokemons(promises1)
        } else {
            return;
        }
    }
    useEffect(() => {
        setLoading(true)
        datafetch();
        setLoading(false)
        filterMethod()
    }, [url])
    const handleUrl = (pageMove) => {
        setUrl(pageMove)
        refV.current.focus()
    }
    const handleChange = (e) => {
        setFormValue(e.target.value);
        if (pokemons.length < 19) {
            return datafetch();
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        filterMethod();
    }
    const filterMethod = () => {

        if (formValue !== "") {
            console.log(formValue)
            let newA = []
            pokemons.map(item => item.types.map(type => {
                if (type.type.name === formValue) {
                    return newA.push(item)
                }
            }))
            return setPokemons(newA)
        }
    }
    return (
        <AppContext.Provider value={{
            pokemons,
            loading,
            nextPage,
            prevPage,
            data,
            refV,
            evoData,
            setevoData,
            handleUrl,
            handleSubmit,
            handleChange,

        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
