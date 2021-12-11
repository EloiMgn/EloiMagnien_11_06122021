import React from 'react';
import './Tags.scss';

class Tags extends React.Component {
  render() {
    return (
      <div>
        {this.props.tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
    );
  }
}

export default Tags;
