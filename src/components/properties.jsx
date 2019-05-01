import React, { Fragment } from 'react';
import PropertyCard from './property-card';

const Properties = () => (
  <Fragment>
    <h3>Properties Page</h3>
    <PropertyCard
      title="A quirky little house!"
      type="Semi-Detached"
      bathrooms="1"
      bedrooms="3"
      price="210000"
      city="Manchester"
      email="thepunkyone@hotmail.com"
    />
  </Fragment>
);

export default Properties;
