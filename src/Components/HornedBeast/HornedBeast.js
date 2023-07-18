import React, { useState } from "react";

import "./HornedBeast.css";

export default function HornedBeast({ title, image_url, description, horns }) {
  const [faves, setFaves] = useState(0);

  function handleFaves() {
    setFaves(faves + 1);
  }
  return (
    <div className="beast-div">
      <h2>{title} </h2>
      <span className="horns">Horns - {horns}</span>
      <img className="img" src={image_url} alt={title} />
      <p className="faves" onClick={handleFaves}>
        ❤️ {faves}
      </p>
      <p>{description}</p>
    </div>
  );
}
