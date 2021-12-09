import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/LOGOW.svg';
import './Footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<Link to="/"><img src={Logo} className="footer__logo" alt="Logo Kasa" /></Link>
				<p className="footer__credits">© 2020 Kasa. All rights reserved</p>
			</footer>
		);
	}
}

export default Footer; 