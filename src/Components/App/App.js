import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Sidebar } from "../Navigation";
import { ScrollToTop } from "../Utils";

import { Homepage, About, Menu, Wines, Contact } from "../../Pages";

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
					<Homepage></Homepage>
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
			</Switch>
		</Router>
	);
}

export default App;
