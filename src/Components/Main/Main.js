import React from "react";
import HornedBeast from "../HornedBeast/HornedBeast";

export default function Main() {
  return (
    <div className="main-div">
      <HornedBeast
        title={"Hairy Claire"}
        imgUrl={
          "https://www.screenhub.com.au/wp-content/uploads/sites/4/2017/04/2-272175-Main-0x0-0.jpg"
        }
        description={"Hairy Screamer who likes to dream"}
      />
      <HornedBeast
        title={"Horny Paul"}
        imgUrl={
          "https://preview.redd.it/golden-horned-beast-swallowed-star-v0-zb5o63nt8qya1.jpg?width=640&crop=smart&auto=webp&s=66730e47a4b57f5e4683d6714c0ddf36d7386271"
        }
        description={"Horny Paul has a southern drawl and tends to crawl"}
      />
    </div>
  );
}
