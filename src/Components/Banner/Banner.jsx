import React from 'react';
import './Banner.css';


class Banner extends React.Component {
	render() {

		return (
			<div className='banner'>
				<div className='banner_title'>{this.props.title}</div>
				<div className='banner_background'></div>
				<img src={this.props.src} alt="" className='banner_img'/>
			</div>
		);
	}
}

export default Banner; 
