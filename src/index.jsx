import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './reset.css';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Router className="index">
        <Header />
        <Routes>
          <Route excact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route>
              <Error />
          </Route> */}
        </Routes>
        <Footer />
      </Router>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
