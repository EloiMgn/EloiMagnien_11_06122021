import React from 'react';
import Arrow from './Arrow/Arrow';
import Slider from './Slider/Slider';
import './Carousel.scss';

class CarouselImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
    this.imgUrls = this.props.pictures;
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = this.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          imagesLength= {this.imgUrls.length}
        />
        <Slider
          src={this.imgUrls[this.state.currentImageIndex]}
          alt={this.props.alt}
          currentImageIndex={this.state.currentImageIndex}
          arrayLength={this.imgUrls.length}
        />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          imagesLength= {this.imgUrls.length}
        />
      </div>
    );
  }
}

export default CarouselImg;
