import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Principal from './pages/Principal';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/principal" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;