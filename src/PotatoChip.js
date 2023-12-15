import React, { useState } from "react";
import "./PotatoChip.css";

const PotatoChip = ({url, alt}) => {
    console.log(window.innerWidth);
    const [{ randomX, randomY }] = useState({
        randomX: Math.random() * window.innerWidth - (window.innerWidth/2),
        randomY: Math.random() * window.innerHeight/2 - 1,
    });

    const transform = `translate(${randomX}px, ${randomY}px)`;

    return <img className="PotatoChip-img"
        style={{transform}}
        src={url}
        alt={alt}
    />

};
//end

export default PotatoChip;