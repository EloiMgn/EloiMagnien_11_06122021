// import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/LOGO.svg'
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className='welcomePage mainNav-link'><img src={Logo} className="main-logo" alt="Logo Kasa" /></Link>
        <nav className='mainNav'>
            <Link to="/" className='welcomePage mainNav-link'>Accueil</Link>
            <Link to="/about" className='about mainNav-link'>A Propos</Link>
        </nav>
      </div>
    )
  }
}

export default Header 