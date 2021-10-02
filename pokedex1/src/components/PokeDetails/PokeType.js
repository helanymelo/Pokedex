import {DivType2} from './StyledDetails'
import { useContext } from 'react';
import GlobalStateContext from '../../Global/GlobalStateContext';


export default function PokeType () {
    const states = useContext(GlobalStateContext);
    const pokemon = states.pokemonDetails 
    
    return (
        <DivType2>
             {pokemon.types[0] && <p>{pokemon.types[0].type.name.toUpperCase()}</p>}
             {pokemon.types[1] && <p>{pokemon.types[1].type.name.toUpperCase()}</p>}
        </DivType2> 
    )

}