import React from 'react';
import PropTypes from 'prop-types';
import '../style/property-card.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faBath, faBed, faPoundSign, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo, faBath, faBed, faPoundSign, faEnvelope, faStar);

const PropertyCard = ({
  _id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userId,
  onSaveProperty,
  favourite,
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
        <FontAwesomeIcon icon="bath" />
        <span className="bathrooms">{bathrooms}</span>
      </div>
      <div>
        <FontAwesomeIcon icon="bed" />
        <span className="bedrooms">{bedrooms}</span>
      </div>
      <div>
        <FontAwesomeIcon icon="pound-sign" />
        <span className="price">{price}</span>
      </div>
      <div className="email">{email}</div>
      <a className="email-button" href={`mailto:${email}?Subject="${title}" target="_top"`}>
        <FontAwesomeIcon icon="envelope" />
        <span>EMail</span>
      </a>
      {userId && favourite &&
        (
          <div className="save-button">
            <FontAwesomeIcon icon="star" />
            <span>Favourites</span>
          </div>
        )
      }
      { userId &&
        (
          <div className="save-button">
            <FontAwesomeIcon icon="star" />
            <span onClick={() => onSaveProperty(_id)}>Save</span>
          </div>
        )
      }
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userId: PropTypes.string,
  onSaveProperty: PropTypes.func.isRequired,
};

export default PropertyCard;
