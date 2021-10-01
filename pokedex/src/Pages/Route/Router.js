import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from "../DetailsPage/DetailsPage";
import Home from "../Home/Home";
import Pokedex from "../Pokedex/Pokedex";


function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route exact path={"/pokedex"}>
                    <Pokedex/>
                </Route>
                <Route exact path={"/detailpage"}>
                    <DetailPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;

