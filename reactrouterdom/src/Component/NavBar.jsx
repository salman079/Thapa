import React from 'react';
import { Routes, Route, Switch, NavLink, Redirect } from 'react-router-dom';
// import { Routes } from 'react-router';
import Home from '../src/Component/Home';
import About from './Component/About';
import Shop from './Component/Shop';
import Error from './Component/Error';
import Shoppinglist from './Component/Shoppinglist';
import Users from './Component/Users';
import Search from './Component/Search';
import './App.css';

export default function NavBar() {
  return (
    <div className="menu_style">
      <NavLink exact activeClassName="active_class" to="/">Home </NavLink>
      <NavLink exact activeClassName="active_class" to="/about">About Us </NavLink>
      <NavLink exact activeClassName="active_class" to="/shop">Shop Now </NavLink>
      <NavLink exact activeClassName="active_class" to="/shop/shoppinglist">Shopping list </NavLink>
      <NavLink exact activeClassName="active_class" to="/users/waiting for input">Users </NavLink>
      <NavLink exact activeClassName="active_class" to="/search">Search </NavLink>
    </div>
  );
};