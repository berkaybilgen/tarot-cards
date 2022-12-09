import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import "./Card.css";

const Card = (props) => {
  let image = "/tarot-cards/cards/" + props.no + ".jpg";
  let tempImage = "/tarot-cards/cards/" + props.no + "_temp.jpg";

  return (
    <div className="card">
      <ProgressiveImage src={image} placeholder={tempImage}>
        {(src) => <img src={src} alt={props.name} />}
      </ProgressiveImage>
    </div>
  );
};

export default Card;
