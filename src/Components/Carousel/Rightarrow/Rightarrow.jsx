import React from 'react';
import './Rightarrow.scss';

class Leftarrow extends React.Component {
  render() {
    return (
      <div
        className="nextArrow"
        onClick={this.props.goToNextSlide}
        onKeyPress={this.props.goToNextSlide}
        role="button"
        tabIndex="0"
      >
        <i className="fa fa-angle-right fa-3x" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Leftarrow;
