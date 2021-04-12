import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon";

function PokemonPage() {

  const [searchName, setSearchName] = useState("")
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((pokemon) => {
        setPokemon(pokemon);
      });
  }, []);

  const filteredName = pokemon.filter((p) => {
    return p.name.toLowerCase().includes(searchName.toLowerCase());
});
  
  const handleForm = (newPokemon) => {
      setPokemon([...pokemon, newPokemon])
  }
// const handleSearch = (event) => {
//   setSearchName(event.target.value)
// }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleForm}/>
      <br />
      <Search searchName={searchName} onSearch={setSearchName}/>
      <br />
      <h1>Hello From Pokemon Collection</h1>
      <PokemonCollection pokemon={filteredName} />
    </Container>
  );
}

export default PokemonPage;
