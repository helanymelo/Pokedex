import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/HomePage/HomePage";
import Pokedex from "../pages/PokedexPage/PokedexPage";
import PageDetails from "../pages/DetailsPage/DetailsPage";
import Header from "../Components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Header />
          <Home />
        </Route>
        <Route exact path={"/pokedex"}>
          <Header />
          <Pokedex />
        </Route>
        <Route exact path={"/details"}>
          <Header />
          <PageDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;