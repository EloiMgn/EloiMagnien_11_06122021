import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <h1 className="error__number">404</h1>
        <h2 className="error__text">Oups! La page que vous demandez n&apos;existe pas.</h2>
        <Link to="/" className="error__link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    );
  }
}

export default Error;
