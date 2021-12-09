import React from 'react';
import './Card.scss';

class Card extends React.Component {
	render() {
		return (
			<li className='card'>
				<img src={this.props.src} alt={this.props.alt} className='card__cover'/>
				<h2 className='card__title'>{this.props.title}</h2>
			</li>
		);
	}
}

export default Card; 