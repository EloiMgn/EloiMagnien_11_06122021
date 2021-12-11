import React from 'react';
import './Tags.scss';

class Tags extends React.Component {
  render() {
    return (
      <div className='tags'>
        {this.props.tags.map((tag, idx) => (
          <div className='tags__tag' key={idx}>
            <p>{tag}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Tags;
