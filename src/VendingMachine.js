import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './VendingMachine.css';

import NavBar from "./NavBar";
import Home from './Home.js';
import Chips from './Chips.js';
import Soda from './Soda.js';
import Sardines from './Sardines.js';


function VendingMachine() {
  return (
    <section className='VendingMachine'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/sardines" element={<Sardines />} />
        </Routes>
      </BrowserRouter>

    </section>
  );
}

export default VendingMachine;

/*
<Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
*/