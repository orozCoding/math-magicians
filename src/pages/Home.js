import React from 'react';
import './Pages.css';
import { text1, text2 } from '../components/HomeText';

const Home = () => (
  <div className="homeContainer d-flex col">
    <p className="homeTitle">
      Welcome to our page!
    </p>
    <p className="text">{text1}</p>
    <p className="text">{text2}</p>
  </div>
);

export default Home;
