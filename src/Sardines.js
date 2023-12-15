import React from "react";
import { Link } from "react-router-dom";
import './Sardines.css';


function Sardines() {
  return (
    <div className="Sardines">
      <p>YOU DON'T EAT THE SARDINES. THE SARDINES EAT YOU!<br/>
      <Link to="/">GO BACK</Link></p>
    </div>
  )
}

export default Sardines;