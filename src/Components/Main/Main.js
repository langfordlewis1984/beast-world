import React from "react";
import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";

export default function Main({ beastData, handleModal }) {
  return (
    <main>
      {beastData.map((beast, key) => {
        return (
          <HornedBeast
            key={beast._id}
            beastObject={beast}
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
            handleModal={handleModal}
          />
        );
      })}
    </main>
  );
}
//   const hornedBeasts = beastData.map((beast) => (
//     <HornedBeast
//       key={beast._id}
//       _id={beast._id}
//       title={beast.title}
//       image_url={beast.image_url}
//       description={beast.description}
//       keyword={beast.keyword}
//       horns={beast.horns}
//       handleModal={handleModal}
//     />
//   ));

//   return <div className="main-div">{hornedBeasts}</div>;
//
