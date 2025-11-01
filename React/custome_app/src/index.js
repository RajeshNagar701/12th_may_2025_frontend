import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('data'));
root.render(
	<div>
		<h1 class="p-5 bg-warning text-white text-center">Hi i am Index.js</h1>
		<App/>
	</div>
)