import React from 'react';
import './Host.scss';

class Host extends React.Component {
  render() {
    return (
      <div className='host'>
        <h2 className='host__name'>{this.props.hostName}</h2>
        <div className='host__picFrame'>
        <img className='host__picture' src={this.props.hostPic} alt={this.props.hostName} />
        </div>
      </div>
    );
  }
}

export default Host;