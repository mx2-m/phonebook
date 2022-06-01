import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom'

import ListComponent from './components/ListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateNumberComponent from './components/CreateNumber';
import UpdateComponent from './components/PhoneNumberEdit';
import PhoneNumberComponent from './components/PhoneNumberComponent';


function App() {
    /*    return (
            <div className="App">
                <ListComponent />
            </div>
        );
    }

export default App;*/


    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListComponent}/>
                        <Route path="/numbers"  exact component={ListComponent }/>
                        <Route path="/add/:id"  exact component={CreateNumberComponent}/>
                        <Route path="/view/:id" exact componentt={ PhoneNumberComponent }/>
                        {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */
                   }
                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </div>

    );
}

export default App;