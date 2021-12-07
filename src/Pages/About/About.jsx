import React from 'react';
import Banner from '../../Components/Banner/Banner';
import aboutBanner from '../../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg';

class Home extends React.Component {
	render() {
		return (
			<div className='homepage'>
				<Banner src={aboutBanner} title=""/>
			</div>
		);
	}
}

export default Home; 