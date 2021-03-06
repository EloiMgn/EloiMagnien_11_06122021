import React from 'react';
import './Arrow.scss';
// {this.props.imagesLength > 1 ?  : {display: none}}
class Arrow extends React.Component {
  render() {
    return (
      <div
        className={this.props.imagesLength > 1 ? `slide-arrow__${this.props.direction}` : 'hidden'}
        onClick={this.props.clickFunction}
        onKeyPress={this.props.clickFunction}
        role="button"
        tabIndex="0"
      >
        <i
          className={
            this.props.direction === 'left'
              ? 'arrow__left fas fa-chevron-left'
              : 'arrow__right fas fa-chevron-right'
          }
        ></i>
      </div>
    );
  }
}

export default Arrow;
