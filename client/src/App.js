// TODO: Using ApolloClient, InMemoryCache, createHttpLink, and setContext from the Apollo Client library, create an Apollo Provider to make every request work with the Apollo server.

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<>
				<Navbar />
				<Switch>
					<Route exact path="/" component={SearchBooks} />
					<Route exact path="/saved" component={SavedBooks} />
					<Route render={() => <h1 className="display-2">Wrong page!</h1>} />
				</Switch>
			</>
		</Router>
	);
}

export default App;
