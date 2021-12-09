import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

class Card extends React.Component {
  render() {
    return (
      <Link to={`/${this.props.id}`} className="card accomodation__link">
        <img
          src={this.props.src}
          alt={this.props.alt}
          className="card__cover"
        />
        <h2 className="card__title">{this.props.title}</h2>
      </Link>
    );
  }
}

export default Card;
