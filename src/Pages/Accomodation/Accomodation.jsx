import React from 'react';
import './Accomodation.scss';
import Carousel from '../../Components/Carousel/Carousel';
import Title from '../../Components/Title/Title';
import Tags from '../../Components/Tag/Tags';
// import datas from '../../Datas/datas.json';

class Accomodation extends React.Component {
  render() {
    return (
      <div>
        <Carousel pictures={this.props.pictures}/>
        <Title
          title={this.props.title}
          location={this.props.location}
        />
        <Tags tags={this.props.tags} />
      </div>
    );
  }
}

export default Accomodation;
