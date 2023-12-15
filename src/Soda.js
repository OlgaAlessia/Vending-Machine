import React from "react";
import { Link } from "react-router-dom";
import './Soda.css';

function Soda() {
  return (
    <div className="Soda">
      <img className="Soda-img-left" src="https://i.gifer.com/NP76.gif"/>
      <p>OMG SUGARRRR<br/>
      <Link to="/">GO BACK</Link></p>
      <img className="Soda-img-right" src="https://i.gifer.com/NP76.gif"/>
    </div>
  )
}

export default Soda;

