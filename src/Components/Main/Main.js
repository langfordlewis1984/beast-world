import React from "react";
import HornedBeast from "../HornedBeast/HornedBeast";
import jsonData from "../../beastData.json";

export default function Main() {
  const hornedBeasts = [];

  for (let i = 0; i < jsonData.length; i++) {
    const beast = jsonData[i];

    hornedBeasts.push(
      <HornedBeast
        key={beast._id}
        _id={beast._id}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
      />
    );
  }

  // console.log(hornedBeasts);
  return <div className="main-div">{hornedBeasts}</div>;
}
