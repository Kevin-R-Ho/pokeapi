import React, {useState, useEffect} from 'react';
import {getAllPokemon, getPokemon} from './services/Pokemon.js'
import PokemonCard from './components/Card/PokemonCard.js';
import Navbar from './components/Navbar/PokeNavbar.js';
import './App.css'
import Background from './components/assets/pokemonBackground.png';

function App() {
  // declare state variables for dynamically moving parts in the App // pokemonData // pages
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loading, setLoading] = useState(true);
  const baseURL = 'https://pokeapi.co/api/v2/pokemon';

  //manipulating states on each render and each update
  //function for API call and set data to states
  //1. grabs list of pokemon via getAllPokemon 2. loads next and previous pages 3. grabs data for those pokemon 4. loading is set to false because information successfully loaded
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(baseURL);
      setNextPage(response.next);
      setPrevPage(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
  // running the defined fetchData function
    fetchData();
  // dependency belongs in bracket
  // if nothing is onside the brackets, it will only load once
  }, [])
 
  //function for next page which fetches next list of pokemon and all the pokemon's data
  const next = async () => {
    setLoading(true)
    let data = await getAllPokemon(nextPage)
    await loadingPokemon(data.results)
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  }
  
  //function for previous page which fetches next list of pokemon and all the pokemon's data
    const prev = async () => {
    if (!prevPage) return;
    setLoading(true)
    let data = await getAllPokemon(prevPage)
    await loadingPokemon(data.results)
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  }

  // 2nd call to API for the pokemonData for each pokemon
  const loadingPokemon = async (data) => {
    let pokemonData = await Promise.all(
      data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(pokemonData)
  }

  //console.log(pokemonData)

  return (
      <div className="background">
        <Navbar />
      { 
        loading ? (<h1>Loading...</h1>) : (
        <>
          <div className="btn">
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
          </div>
        
            <div className="container">
              {pokemonData.map((pokemon, i) => {
                return <PokemonCard key={i} pokemon={pokemon} />
              })}
          </div>
       </>
       )
      }
      </div>
  );
}

export default App;
