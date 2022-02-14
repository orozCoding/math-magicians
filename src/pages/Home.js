import React from 'react';
import { text1, text2 } from '../components/HomeText';

const Home = () => (
  <div className="homeContainer">
    <p className="text">{text1}</p>
    <p className="text">{text2}</p>
  </div>
);

export default Home;
