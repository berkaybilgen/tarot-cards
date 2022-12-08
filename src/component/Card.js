import React from "react";
import "./Card.css";

const Card = (props) => {
  let image = "cards/" + props.no + ".jpg";

  return (
    <div className="card">
      <img src={image} />
    </div>
  );
};

export default Card;