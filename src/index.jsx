import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './reset.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';

ReactDOM.render(
  <React.StrictMode>
    <Router className="index">
      <Header />
      <div className="mainDiv">
        <Routes>
          <Route excact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
