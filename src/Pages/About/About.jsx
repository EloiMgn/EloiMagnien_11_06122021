import React from 'react';
import Banner from '../../Components/Banner/Banner';
import aboutBanner from '../../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg';
// import Header from '../../Components/Header/Header';
// import Footer from '../../Components/Footer/Footer';


class Home extends React.Component {
	render() {
		return (
			<div className='homepage'>
				<Banner src={aboutBanner}/>
			</div>
		);
	}
}

export default Home; 