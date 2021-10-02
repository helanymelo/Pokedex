import React from "react";
import {useHistory} from "react-router-dom";

function Home(){
    const history = useHistory()
    const goToPokedex =()=>{
        history.push("/pokedex");

    }
    return(
        <div>
            <Button onClick={goToPokedex}>
                Ver Pokedex
             </Button>

        
        </div>
    )
}

export default Home;