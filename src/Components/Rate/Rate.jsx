import React from 'react';
import './Rate.scss';
import starColor from '../../Assets/Star_color.svg';
import starGrey from '../../Assets/Star_grey.svg';


class Rate extends React.Component {
  render() {
    const scaleValue = this.props.value;
    const range = [1, 2, 3, 4, 5];
    return (
      <div className="rate">
        {range.map((rangeElem, idx) =>
          scaleValue >= rangeElem ? (
            <img key={idx} src={starColor} alt="colored star" className='rateStar'/>
          ) : <img key={idx} src={starGrey} alt="grey star" className='rateStar'/>
        )}
      </div>
    );
  }
}

export default Rate;
