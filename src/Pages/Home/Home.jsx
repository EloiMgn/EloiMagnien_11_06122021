import React from 'react';
import './Home.css';
import Banner from '../../Components/Banner/Banner';
import Gallery from '../../Components/Gallery/Gallery';
import homepageBanner from '../../Assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';


class Home extends React.Component {
	render() {
		return (
			<main className='homepage'>
				<Banner src={homepageBanner} title='Chez vous, partout et ailleurs'/>
				<Gallery />
			</main>
		);
	}
}

export default Home; 