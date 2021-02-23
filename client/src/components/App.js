import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import youtube from '../apis/youtube';
import Header from './Header';
import ChurchList from './churches/ChurchList';
import ChurchCreate from './churches/ChurchCreate';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/" exact></Route>
                <Route path="/churches" exact component={ChurchList}></Route>
                <Route path="/churches/new" exact component={ChurchCreate}></Route>
            </BrowserRouter>
        </div>
    )
}

export default App;