import React from "react";
import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";

export default function Main({ beastData, handleModal }) {
  return (
    <main className="main-div">
      {beastData.map((beast, key) => {
        return (
          <div className="grid-item" key={beast._id}>
            <HornedBeast
              beastObject={beast}
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              horns={beast.horns}
              handleModal={handleModal}
            />
          </div>
        );
      })}
    </main>
  );
}
