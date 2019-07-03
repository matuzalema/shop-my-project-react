import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import {Contact} from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import {Promotions} from './components/Promotions/Promotions';
import Product from './components/ProductComponents/Product/Product';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/FAQ'} component={FAQ} />
            <Route exact path={'/promotions'} component={Promotions} />
            <Route exact path={'/product/:id'} component={Product} />
            <Route exact path={'/cart'} component={Cart} />
            <Route exact path={'/order'} component={Order} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
