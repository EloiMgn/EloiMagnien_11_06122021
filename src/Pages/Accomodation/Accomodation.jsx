import React from 'react';
import './Accomodation.scss';
import Carousel from '../../Components/Carousel/Carousel';
import Title from '../../Components/Title/Title';
import Tags from '../../Components/Tag/Tags';
import Host from '../../Components/Host/Host';
import Rate from '../../Components/Rate/Rate';
import Dropdown from '../../Components/Dropdown/Dropdown';
// import datas from '../../Datas/datas.json';

class Accomodation extends React.Component {
  render() {
    return (
      <div className="accomodation">
        <Carousel
          className="accomodation__carousel"
          pictures={this.props.pictures}
          alt={this.props.alt}
        />
        <div className="accomodation__topDescription">
          <div className="accomodation__topDescription__left">
            <Title title={this.props.title} location={this.props.location} />
            <Tags tags={this.props.tags} />
          </div>
          <div className="accomodation__topDescription__right">
            <Host hostName={this.props.hostName} hostPic={this.props.hostPic} />
            <Rate value={this.props.value} />
          </div>
        </div>
        <div className="accomodation__downDescription">
          <div className="accomodation__downDescription__left">
            <Dropdown title="Description" text={this.props.textDescription} />
          </div>
          <div className="accomodation__downDescription__right">
            <Dropdown title="Équipements" text={this.props.textEquipements} />
          </div>
        </div>
      </div>
    );
  }
}

export default Accomodation;
