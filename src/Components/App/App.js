import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Navbar, Sidebar} from "../Navigation";
import {ScrollToTop} from "../Utils";

import {About, Contact, Landing, Menu, Reservation, Wines} from "../../Pages";

function App() {
    return (
        <Router>
            {/* Utils */}
            <ScrollToTop></ScrollToTop>

            {/* Navigation */}
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            {/* Routes */}
            <Switch>
                <Route path="/" exact>
                    <Landing></Landing>
                </Route>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/menu">
                    <Menu></Menu>
                </Route>
                <Route path="/wines">
                    <Wines></Wines>
                </Route>
                <Route path="/contact">
                    <Contact></Contact>
                </Route>
                <Route path="/reservation">
                    <Reservation></Reservation>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
