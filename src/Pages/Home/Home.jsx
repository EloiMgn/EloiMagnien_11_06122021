import React from 'react';
import Banner from '../../Components/Banner/Banner'
import homepageBanner from '../../Assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'
// import aboutBanner from '../../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'

class Home extends React.Component {
  render() {
    return (
    <div className='homepage'>
      <Banner src={homepageBanner} title ='Chez vous, partout et ailleurs'/>
    </div>
    )
  }
}

export default Home 