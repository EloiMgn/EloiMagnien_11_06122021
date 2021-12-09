import React from 'react';
import Banner from '../../Components/Banner/Banner';
import aboutBanner from '../../Assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg';
import Dropdown from '../../Components/Dropdown/Dropdown';
import './About.scss';
import datas from '../../Datas/dropdownText.json';

class Home extends React.Component {
  render() {
    return (
      <div className="about">
        <Banner src={aboutBanner} />
        <div className="about__content">
          {datas.map((about, idx) => (
            <Dropdown title= {about.title} text={about.text} key={idx}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
