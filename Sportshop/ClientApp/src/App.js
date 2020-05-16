import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/pages/Home';
import { Info } from './components/pages/Info';
import { Registration } from './components/pages/Registration';
import { Auth } from './components/pages/Auth';
import { Catalog } from './components/pages/Catalog';
import { Card } from './components/pages/Card';
import { Cart } from './components/pages/Cart';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/catalog' component={Catalog} />
        <Route exact path='/catalog/:id' component={Cart} />
        <Route exact path='/card' component={Card} />
        <Route path='/registration' component={Registration} />
        <Route path='/auth' component={Auth} />
      </Layout>
    );
  }
}
