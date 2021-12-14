import React from 'react';
import './Slider.scss';

class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <img
          src={this.props.src}
          alt={this.props.alt}
          className="slider__image"
        />
        <div className={this.props.arrayLength > 1 ? 'slider__index' : 'hidden'}>{`${this.props.currentImageIndex + 1}/${
          this.props.arrayLength
        }`}</div>
      </div>
    );
  }
}

export default Slider;
