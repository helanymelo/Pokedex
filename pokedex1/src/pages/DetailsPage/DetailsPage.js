import PokeImageDetails from "../../Components/PokeDetails/PokeImage";
import PokeMoves from "../../Components/PokeDetails/PokeMoves";
import PokeStats from "../../Components/PokeDetails/PokeStats";
import { DivMoves, PokeDetailsDiv } from "./StyledDetailsPage";
import PokeType from "../../Components/PokeDetails/PokeType"


export default function PageDetails () {

    return (
        <PokeDetailsDiv>
            <PokeImageDetails/>
            <PokeStats/>
            <DivMoves>
                <PokeType/>
                <PokeMoves/>
            </DivMoves>
        </PokeDetailsDiv>
    )

}