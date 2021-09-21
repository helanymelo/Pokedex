import React from "react";
import {useHistory} from "react-router-dom";

function Home(){
    const history = useHistory()
    const goToPokedex =()=>{
        history.push("/pokedex");

    }
    return(
        <div>
            <button onClick={goToPokedex}>Ver Pokedex</button>
        </div>
    )
}

export default Home;