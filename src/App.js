import React, {Component} from 'react';
import "./style.css"
import {Switch, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Details from "./components/Details"
import Cart from "./components/Cart"
import Default from "./components/Default"
import Model from "./components/Model"

export default class App extends Component {
  render () {
    return (
     <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} /> 
          <Route path="/details" component={Details} /> 
          <Route path="/cart" component={Cart} /> 
          <Route component={Default} /> 
        </Switch>
        <Model/>
     </React.Fragment>
    )
  }
}
