import React from 'react';
import './Carousel.scss';
import Rightarrow from './Rightarrow/Rightarrow';
import Leftarrow from './Leftarrow/Leftarrow';
import datas from '../../Datas/datas.json';

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <Leftarrow />
        <img
          src={this.props.activeImage}
          alt={`${this.props.id} ${this.props.activeIndex}`}
        />
        <Rightarrow />
      </div>
    );
  }
}

export default Carousel;
