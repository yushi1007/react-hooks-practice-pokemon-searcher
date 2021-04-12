import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const pokemonList = pokemon.map((p) => {
    console.log(p)
    return (
    <PokemonCard 
    key={p.id}
    name={p.name}
    hp={p.hp}
    sprites={p.sprites}
    />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
