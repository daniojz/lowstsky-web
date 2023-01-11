import React from "react";
import { Icon } from "@iconify/react";

const BeatCard = ({title, price, photoUrl}) => {
  return (
    <div key={title} className="beatCardContainer">
        <p>{title}</p>
        <p>{price}</p>
        <p>{photoUrl}</p>
    </div>
  );
}

export default BeatCard
