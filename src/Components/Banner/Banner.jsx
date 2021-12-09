import React from 'react';
import './Banner.scss';


class Banner extends React.Component {
	render() {

		return (
			<div className='banner'>
				<div className='banner__title'>{this.props.title}</div>
				<div className='banner__background'></div>
				<img src={this.props.src} alt="" className='banner__img'/>
			</div>
		);
	}
}

export default Banner; 
