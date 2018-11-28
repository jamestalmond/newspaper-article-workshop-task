import './SCSS/index';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './JS/components/Header';
import Content from './JS/components/Content';
import Footer from './JS/components/Footer';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Content />
			<Footer />
		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
