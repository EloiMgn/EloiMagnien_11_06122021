import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Error from '../Components/Error/Error';
import Accomodation from '../Pages/Accomodation/Accomodation';
import Datas from '../Datas/datas.json';

class Routing extends React.Component {
  render() {
    return (
      <Router className="index">
      <Header />
      <div className="mainDiv">
        <Routes>
          <Route excact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          {Datas.map((rental, idx) => (
            <Route
            key={idx}
              path={rental.id}
              element={
                <Accomodation
                  title={rental.title}
                  location={rental.location}
                  tags={rental.tags}
                  pictures={rental.pictures}
                  alt={rental.title}
                  hostName={rental.host.name}
                  hostPic={rental.host.picture}
                  value={rental.rating}
                  textDescription={rental.description}
                  textEquipements={rental.equipments}
                />
              }
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </Router>
    );
  }
}

export default Routing;