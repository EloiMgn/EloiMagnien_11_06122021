// import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/LOGO.svg'
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} className="App-logo" alt="Logo Kasa" />
        <nav className='mainNav'>
            <Link to="/" className='welcomePage mainNav-link'>Accueil</Link>
            <Link to="/about" className='about mainNav-link'>A Propos</Link>
        </nav>
      </div>
    )
  }
}

export default Header 
