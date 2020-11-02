import React from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Home from '../src/Component/Home';
import About from './Component/About';
import Shop from './Component/Shop';
import Error from './Component/Error';
import Shoppinglist from './Component/Shoppinglist';
import Users from './Component/Users';
import Search from './Component/Search';
import './App.css';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/About' component={About} />
        <Route path='/shop' component={Shop} exact/>
        <Route path='/shop/shoppinglist' component={Shoppinglist} />
        <Route path='/users/:username' component={Users} />
        <Route path='/search' component={Search} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}