import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/products';
import Home from './components/home';
import Items from './components/itemlist';
import Navbar from './components/navbar';
export default function Routes(props) {
    return (
        <BrowserRouter>
         <Navbar/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/products' component={Products} exact/>
                <Route path='/item-list' component={Items} exact/>

            </Switch>
        </BrowserRouter>
    
    );
}