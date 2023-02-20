import React from "react";
import { Icon } from "@iconify/react";

const BeatCard = ({title, price, photoUrl, selected}) => {
  return (
    <div key={title} className={`beatCardContainer not-selected ${selected ? 'selected' : ''}`}>
        <p>{title}</p>
        <p>{price}</p>
        <p>{photoUrl}</p>
    </div>
  );
}

export default BeatCard
