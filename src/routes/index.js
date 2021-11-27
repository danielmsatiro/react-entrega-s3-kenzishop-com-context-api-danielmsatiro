import React from "react";
import { Route, Switch } from "react-router";
import { Cart } from "../pages/cart";
import { Shop } from "../pages/shop";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Shop} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};
