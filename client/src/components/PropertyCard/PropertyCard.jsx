import React, { useState } from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const PropertyCard = ({card}) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id}/>
      <img 
        src={imageError ? 'https://via.placeholder.com/300x200?text=No+Image' : card.image} 
        alt={card.title} 
        onError={handleImageError}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{truncate(card.title, {length: 15})}</span>
      <span className="secondaryText">{truncate(card.description, {length: 80})}</span>
    </div>
  );
};

export default PropertyCard;
