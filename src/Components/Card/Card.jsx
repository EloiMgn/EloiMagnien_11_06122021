import React from 'react';
import './Card.css'

class Card extends React.Component {
  render() {
    return (
    <li className='card'>
      <img src={this.props.src} alt={this.props.alt} className='card_cover'/>
      <h2 className='card_title'>{this.props.title}</h2>
    </li>
    )
  }
}

export default Card 