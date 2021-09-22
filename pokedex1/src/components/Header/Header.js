import React from "react";
import { useHistory } from 'react-router-dom'
import { HeaderDiv, Title } from './Styled'

const Header = (props) => {
    const history = useHistory()

    const goToPokedex = () => {
        history.push('/pokedex')
    }

    const goToList = () => {
        history.push('/')
    }

    return (
        <div>
            
                <HeaderDiv>
                    <button onClick={goToPokedex}>Ir Para Pokedex</button>
                    <Title>Lista de Pokemons</Title>
                    <p></p>
                </HeaderDiv>
            
                <HeaderDiv>
                    <button onClick={goToList}>Voltar para a Lista de Pokemons</button>
                    <Title>Pokedex</Title>
                    <p></p>
                </HeaderDiv>
            
                <HeaderDiv>
                    <button onClick={goToList}>Voltar</button>
                   <Title>{props.name}</Title>
                    <button onClick={goToPokedex}>Ir Para Pokedex</button>
                </HeaderDiv>
        </div>
    )
}

export default Header