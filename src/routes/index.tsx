import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/index";
import Details from "../pages/Details/intex";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/details" component={Details} exact />
      </Switch>
    </BrowserRouter>
  );
}
