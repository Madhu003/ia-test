import React, { useEffect, useState, useContext } from 'react';
import MyContext from "./Context";
import {
    BrowserRouter as Router, Link, Redirect, Route, Switch
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails';
import UserList from './UserList';
import Home from './Home';
import { Button } from '@material-ui/core';

let baseUrl = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json";

function App() {


    return <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact><Redirect to="/home" /></Route>
                <Route path="/home" component={Home} />
                <Route path="/user/:id" component={UserDetails} />
                <Route path="/sortlisted">
                    <h2 style={{display: "inline"}}>SortListed User</h2>
                    <Button color="link">
                        <Link to="/home">
                            Back To Home
                        </Link>
                    </Button>
                    <UserList status="SORTLISTED" />
                </Route>
                <Route path="/rejected">
                    <h2 style={{display: "inline"}}>Rejected User</h2>
                    <Button color="link">
                        <Link to="/home">
                            Back To Home
                        </Link>
                    </Button>
                    <UserList status="REJECTED" />
                </Route>
            </Switch>
        </Router>

    </div>;
}

export default App;

