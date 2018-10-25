import './SCSS/index';

import React from 'react';
import ReactDOM from 'react-dom';
import NewspaperArticle from './JS/components/NewspaperArticle';

function App() {
	return (
		<NewspaperArticle />
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
