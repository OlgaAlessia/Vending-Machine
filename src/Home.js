import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";


function Home() {

  return (
    <div className="Home">
      <div className="Home-div">HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</div>
      <div className="Home-nav">
        <Link to="/SODA">SODA</Link>
        <Link to="/chips">CHIPS</Link>
        <Link to="/sardines">FRESH SARDINES</Link>
      </div>
    </div>
  );
}

export default Home;
