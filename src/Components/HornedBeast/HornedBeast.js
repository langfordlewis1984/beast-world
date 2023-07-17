import React from "react";

import "./HornedBeast.css";

export default function HornedBeast({ title, imgUrl, description }) {
  return (
    <div className="beast-div">
      <h2>{title}</h2>
      <img className="img" src={imgUrl} alt={title}></img>
      <p>{description}</p>
    </div>
  );
}
