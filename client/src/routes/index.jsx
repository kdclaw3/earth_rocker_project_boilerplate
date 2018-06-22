import React from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from "layouts/Dashboard/Dashboard.jsx";

const App = props => (
	<BrowserRouter basename="/">
		<Route path="/" component={Dashboard} />
	</BrowserRouter>
);

export default hot(module)(App)
