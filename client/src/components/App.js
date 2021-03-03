import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import ChurchList from './churches/ChurchList';
import ChurchCreate from './churches/ChurchCreate';
import ChurchEdit from './churches/ChurchEdit';
import UserList from './users/UserList';
import UserCreate from './users/UserCreate';
import Home from './Home';
import PlayerPage from './PlayerPage';
import SearchResults from './SearchResults';
import history from '../history';
import Testing from './Testing';

const App = () => {

    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/churches" exact component={ChurchList}></Route>
                <Route path="/churches/new" exact component={ChurchCreate}></Route>
                <Route path="/churches/:id" exact component={PlayerPage}></Route>
                {/* <Route path="/churches/:id" exact component={Testing}></Route> */}
                <Route path="/search/:term" exact component={SearchResults}></Route>
                <Route path="/churches/edit/:id" exact component={ChurchEdit}></Route>

                <Route path="/users/new" exact component={UserCreate}></Route>
                <Route path="/users" exact component={UserList}></Route>
            </Router>
        </div>
    )
}

export default App;