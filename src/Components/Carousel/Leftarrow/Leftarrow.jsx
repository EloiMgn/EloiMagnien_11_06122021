import { React, useState } from 'react';
import './Leftarrow.scss';

class Rightarrow extends React.Component {
    constructor(props) {
    super(props);
    this.state = {activeIndex: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      activeIndex: !state.activeIndex
    }));
  }

  render() {
    return (
      <div
        className="backArrow"
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
        role="button"
        tabIndex="0"
      >
        <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Rightarrow;
