import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h2 className="welcome__text">Bienvenue sur Kasa!</h2>
        <div className="welcome__text">Cliquez ici pour entrer sur le site :</div>
        <Link to="/home" className="welcome__link">Découvrir Kasa</Link>
      </div>
    );
  }
}

export default Welcome;
