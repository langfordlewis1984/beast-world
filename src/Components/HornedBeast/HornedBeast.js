import React, { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({
  title,
  image_url,
  description,
  horns,
  handleModal,
  beastObject,
}) {
  const [faves, setFaves] = useState(0);

  function handleFaves() {
    setFaves(faves + 1);
  }
  return (
    <div className="beast-div">
      <h2>{title} </h2>
      <span className="horns">Horns - {horns}</span>
      <img
        className="img"
        src={image_url}
        alt={title}
        onClick={() => handleModal(beastObject)}
      />
      <p className="faves" onClick={handleFaves}>
        <span className="heart">❤️</span> {faves}
      </p>
      <p>{description}</p>
    </div>
  );
}
