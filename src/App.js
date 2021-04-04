import React, { useContext } from 'react'
import Loading from './components/Loading'
import Pokevolution from './components/Pokevolution'
import { AppContext } from './context'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css"
import PokemonList from './components/PokemonList'
const App = () => {
  const { loading } = useContext(AppContext)
  return (
    <>
      <Router>
        {loading ? <Loading /> : (
          <div>
            <Route exact path='/'>

              <PokemonList />
            </Route >
            <Route path="/:id" children={<Pokevolution />} />
          </div>

        )}
      </Router>
    </>

  )
}

export default App
