import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Chips.css';
import PotatoChip from "./PotatoChip";
import { v1 as uuid } from "uuid";

function Chips() {
  const [count, setCount] = useState(0);
  const [bags, setBags] = useState([]);

  const addBag = () => {
    setBags(bags => [...bags, {
      id: uuid(),
      url: "potato-chips.png",
      name: `bags${count}`
    }]);
    setCount(count + 1);
  }

  return (
    <div className="Chips">
      <div className="Chips-div">
        <p>BAGS EATEN: {count}</p>
        <button className="Chips-btn" onClick={addBag}>NOM NOM NOM</button><br />
        <Link to="/">GO BACK</Link>
      </div>
      <div className="Chips-area">
        {bags.map(potbags => (
          <PotatoChip
            key={potbags.id}
            url={potbags.url}
            alt={potbags.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Chips;

/*<img src="https://i.gifer.com/9Ieq.gif" alt="sardine" />*/