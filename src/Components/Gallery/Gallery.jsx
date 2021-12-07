import React from 'react';
import './Gallery.css';
import datas from '../../Datas/datas.json';
import Card from '../Card/Card';

class Gallery extends React.Component {
	render() {
		return (
			<ul className="gallery">
				{datas.map((rental, idx) => (
					<Card src= {rental.cover} alt={rental.title} title={rental.title} key={idx}/>
				))}
			</ul>
		);
	}
}

export default Gallery; 