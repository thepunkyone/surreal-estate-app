import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);

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
      <div className="header">
        <FontAwesomeIcon icon="igloo" className="logo-icon fa-lg" />
      </div>
      <h4 className="title">{title}</h4>
      <div>
        <span className="type">{type}</span>
          -
        <span className="city">{city}</span>
      </div>
      <div>
        <FontAwesomeIcon icon="igloo" />
        <span className="bathrooms">{bathrooms}</span>
      </div>
      <div>
        <FontAwesomeIcon icon="igloo" />
        <span className="bedrooms">{bedrooms}</span>
      </div>
      <div>
        <FontAwesomeIcon icon="igloo" />
        <span className="price">{price}</span>
      </div>
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
