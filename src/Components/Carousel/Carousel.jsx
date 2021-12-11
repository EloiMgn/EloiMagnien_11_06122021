import React from 'react';
import './Carousel.scss';
// import Carousel from 'react-responsive-carousel';
import datas from '../../Datas/datas.json';

class Carousel extends React.Component {
  render() {
    const galleries = [
      datas.map((rental) => ({
        id: rental.id,
        pictures: rental.pictures
      }))
    ];
    const rentalId = window.location.pathname.split('/')[1];

    return (
      // galleries.forEach((gallery) => {
      //   if (gallery.id === rentalId) {
      // <Carousel showArrows onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
      //   {gallery.map((rental) => (
      // 		<div>
      //       <img src={rental} />
      //       <p className="legend">Legend 1</p>
      //     </div>
      // 	))}
      // </Carousel>;

      //   }
      // })
      <div>
        <div className='carousel'>Carousel here</div>
      </div>
    );
  }
}

export default Carousel;
