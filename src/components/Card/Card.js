import React, { useState } from 'react';
import './CardStyle.css';

const Card = ({ title, content, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{title}</h2>
      <img src={image} alt={title} className="card-image"/>
      <p>{content}</p>
    </div>
  );
};

export default Card;
