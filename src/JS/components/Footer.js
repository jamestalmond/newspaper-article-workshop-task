import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer className="newspaper__footer">
			<div className="content-container">
				&copy; Copyright The Daily Almond {currentYear}
			</div>
		</footer>
	);
};

export default Footer;
