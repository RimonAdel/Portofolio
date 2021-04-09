import React from 'react';
// import "../../../node_modules/bootstrap/dist/css/boo"
import "./Card.css"

const Card = ({ title, image, discription, link }) => {
  // const url = image && image.url;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card">
      <img src={image} alt="Denim Jeans" />
      <h4>{title}</h4>
      <p class="discription">{discription}</p>
    </a>
  );
};

export default Card;
