import { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { DivType } from "./StyledDetails";

export default function PokeMoves() {
  const states = useContext(GlobalStateContext);
  const pokemon = states.pokemonDetails;
  return (
    <DivType>
      <p><strong>MOVES</strong></p>
      {pokemon.moves[0] && <p>{pokemon.moves[0].move.name.toUpperCase()}</p>}
      {pokemon.moves[1] && <p>{pokemon.moves[1].move.name.toUpperCase()}</p>}
      {pokemon.moves[2] && <p>{pokemon.moves[2].move.name.toUpperCase()}</p>}
    </DivType>
  );
}