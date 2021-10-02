import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import PokeCard from "../../Components/PokeCard/PokeCard";
import { GridContainer, HomeDiv  } from "./styledHomePage";
import { goToPageDetails } from "../../Coordination/coordination";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Home() {
  const states = useContext(GlobalStateContext);
  const history = useHistory();

  const addPokemon = (pokemon) => {
    const newListPokemon = states.pokemonList.filter((poke) => {
      return poke !== pokemon;
    });
    states.setPokedex([pokemon, ...states.pokedex]);
    states.setPokemonList(newListPokemon);
  };

  const getDetailsOfPokemon = (pokemon) => {
    states.setPokemonDetails(pokemon);
    goToPageDetails(history);
  };

  return (
    <HomeDiv>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button  onClick = {() => states.setMaxPokemons(0)}>1</Button>
        <Button  onClick = {() => states.setMaxPokemons(20)}>2</Button >
        <Button  onClick = {() => states.setMaxPokemons(40)}>3</Button>
        <Button  onClick = {() => states.setMaxPokemons(60)}>4</Button >
        <Button  onClick = {() => states.setMaxPokemons(80)}>5</Button >
        <Button  onClick = {() => states.setMaxPokemons(100)}>6</Button >
      </ButtonGroup>

    <GridContainer> 
      
      {states.pokemonList &&
        states.pokemonList.map((pokemon) => {
          return (
            <PokeCard
              id={pokemon.id}
              name={pokemon.name.toUpperCase()}
              img={pokemon.sprites.front_default}
              add={() => {
                addPokemon(pokemon);
              }}
              details={() => {
                getDetailsOfPokemon(pokemon);
              }}
            />
          );
        })}
    </GridContainer>
    </HomeDiv>
  );
}