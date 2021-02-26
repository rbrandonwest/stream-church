import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import youtube from '../apis/youtube';
import Header from './Header';
import ChurchList from './churches/ChurchList';
import ChurchCreate from './churches/ChurchCreate';
import Home from './Home';
import PlayerPage from './PlayerPage';

const App = () => {

    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/churches" exact component={ChurchList}></Route>
                <Route path="/churches/new" exact component={ChurchCreate}></Route>
                <Route path="/churches/:id" exact component={PlayerPage}></Route>
            </BrowserRouter>
        </div>
    )
}

export default App;