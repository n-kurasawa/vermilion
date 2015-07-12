import React from "react";
import FluxComponent from 'flummox/component';
import Router from 'react-router';
import Flux from '../Flux';
import routes from "../routes";

const flux = new Flux();

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

// Render app
router.run((Handler, state) => {

  React.render(
    <FluxComponent flux={flux}>
      <Handler {...state} />
    </FluxComponent>,
    document.getElementById('app')
  );
});
