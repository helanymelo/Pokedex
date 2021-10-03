import { DivContainerImage, P, DivDetails } from "./StyledDetails";
import { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";

export default function PokeStats() {
  const states = useContext(GlobalStateContext);
  const pokemon = states.pokemonDetails;

  return (
    <DivContainerImage>
      <p><strong>PODERES</strong></p>
      <DivDetails>
        {pokemon.status[0] && (
          <P>
            <strong>HP: </strong>{pokemon.status[0].base_stat}
          </P>
        )}
        {pokemon.status[1] && (
          <P>
            <strong>ATTACK:</strong>{" "}
            {pokemon.status[1].base_stat}
          </P>
        )}
        {pokemon.status[2] && (
          <P>
            <strong>DEFFENSE: </strong>{" "}
            {pokemon.status[2].base_stat}
          </P>
        )}
        {pokemon.status[3] && (
          <P>
            <strong>SPECIAL-ATTACK:</strong>{" "}
            {pokemon.status[3].base_stat}
          </P>
        )}
        {pokemon.status[4] && (
          <P>
            <strong>SPECIAL-DEFFENSE:</strong>{" "}
            {pokemon.status[4].base_stat}
          </P>
        )}
        {pokemon.status[5] && (
          <P>
            <strong>SPEED: </strong>{" "}
            {pokemon.status[5].base_stat}
          </P>
        )}
      </DivDetails>
    </DivContainerImage>
  );
}