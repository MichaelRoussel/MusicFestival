import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";

import ArtistNew from "./artists/new";
import ArtistIndex from "./artists/index";
import ArtistShow from "./artists/show";
import ArtistEdit from "./artists/edit";
import ArtistDestroy from "./artists/destroy";
import StageNew from "./stages/new";
import StageIndex from "./stages/index";
import StageShow from "./stages/show";
import StageEdit from "./stages/edit";
import StageDestroy from "./stages/destroy";


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/artists/new" component={ArtistNew} />
      <Route exact path="/artists" component={ArtistIndex} />
      <Route exact path="/artists/:id" component={ArtistShow} />
      <Route exact path="/artists/:id/edit" component={ArtistEdit} />
      <Route exact path="/artists/:id/destroy" component={ArtistDestroy} />
      <Route exact path="/stages/new" component={StageNew} />
      <Route exact path="/stages" component={StageIndex} />
      <Route exact path="/stages/:id" component={StageShow} />
      <Route exact path="/stages/:id/edit" component={StageEdit} />
      <Route exact path="/stages/:id/destroy" component={StageDestroy} />
    </Switch>
  );
}

export default Routes;
