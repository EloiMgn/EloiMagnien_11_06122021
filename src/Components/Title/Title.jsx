import React from 'react';
import './Title.scss';

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title'>{this.props.title}</h1>
        <h2 className='location'>{this.props.location}</h2>
      </div>
    );
  }
}

export default Title;