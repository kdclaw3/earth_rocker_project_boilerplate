import React from 'react';
import ReactDOM from 'react-dom';

import 'assets/css/material-dashboard-react.css';

import App from 'routes/index.jsx';

const render = (TheApp) => {
	ReactDOM.render(
		<TheApp />, document.getElementById('root')
	);
}

render(App)

