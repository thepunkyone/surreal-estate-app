import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="title">{title}</div>
      <div className="type">{type}</div>
      <div className="bathrooms">{bathrooms}</div>
      <div className="bedrooms">{bedrooms}</div>
      <div className="price">{price}</div>
      <div className="city">{city}</div>
      <div className="email">{email}</div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
