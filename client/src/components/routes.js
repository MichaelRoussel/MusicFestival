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
import PerformanceNew from "./performances/new";
import PerformanceIndex from "./performances/index";
import PerformanceShow from "./performances/show";
import PerformanceEdit from "./performances/edit";
import PerformanceDestroy from "./performances/destroy";

import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";


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
      <Route exact path="/performances/new" component={PerformanceNew} />
      <Route exact path="/performances" component={PerformanceIndex} />
      <Route exact path="/performances/:id" component={PerformanceShow} />
      <Route exact path="/performances/:id/edit" component={PerformanceEdit} />
      <Route exact path="/performances/:id/destroy" component={PerformanceDestroy} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
    </Switch>
  );
}

export default Routes;
