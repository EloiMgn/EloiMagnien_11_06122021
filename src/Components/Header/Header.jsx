import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/LOGOR.svg';
import './Header.scss';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<Link to="/" className='welcomePage mainNav-link'><img src={Logo} className="main-logo" alt="Logo Kasa" /></Link>
				<nav className='mainNav'>
					<Link to="/" className='welcomePage mainNav-link'>Accueil</Link>
					<Link to="/about" className='about mainNav-link'>A Propos</Link>
				</nav>
			</header>
		);
	}
}

export default Header; 
