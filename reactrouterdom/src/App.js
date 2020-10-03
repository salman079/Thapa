import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from '../src/Component/Home';
import About from './Component/About';
import Shop from './Component/Shop';
import Error from './Component/Error';
import Shoppinglist from './Component/Shoppinglist';
import Users from './Component/Users';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/About' component={About} />
        <Route path='/shop' component={Shop} exact/>
        <Route path='/shop/shoppinglist' component={Shoppinglist} />
        <Route path='/users/:username' component={Users} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
function Navbar() {
  return (
    <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">Home </NavLink>
        <NavLink exact activeClassName="active_class" to="/about">About Us </NavLink>
        <NavLink exact activeClassName="active_class" to="/shop">Shop Now </NavLink>
        <NavLink exact activeClassName="active_class" to="/shop/shoppinglist">Shopping list </NavLink>
        <NavLink exact activeClassName="active_class" to="/users/waiting for input">Users </NavLink>
    </div>
  );
};
export default App;
export {Navbar};