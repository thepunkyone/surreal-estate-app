import React from 'react';
import { shallow } from 'enzyme';
import Properties from '../../src/components/properties';
import axios from 'axios';

const MOCK_PROPERTIES = {data: [
  {
    _id: 1,
    title: 'A quirky little house!',
    type: 'Semi-Detached',
    bathrooms: 1,
    bedrooms: 3,
    price: 210000,
    city: 'Manchester',
    email: 'thepunkyone@hotmail.com',
  },
  {
    _id: 2,
    title: 'A very nice bungalow!',
    type: 'Bungalow',
    bathrooms: 1,
    bedrooms: 2,
    price: 180000,
    city: 'Liverpool',
    email: 'thepunkyone@hotmail.com',
  },
  {
    _id: 3,
    title: 'Great house, under offer!',
    type: 'Terraced',
    bathrooms: 1,
    bedrooms: 4,
    price: 280000,
    city: 'Manchester',
    email: 'thepunkyone@hotmail.com',
  },
]
};


jest.mock('axios');
const getPropertiesMock = Promise.resolve(MOCK_PROPERTIES);

axios.get.mockImplementation(() => getPropertiesMock);

describe('Properties component test', () => {
  const wrapper = shallow(
    <Properties />
  );

  it('Properties component renders the correct number of PropertyCard components', (done) => {
    getPropertiesMock.then(() => {
      console.log(wrapper.debug());
      done();
    });
   
    //console.log(wrapper.dive().debug());
  });
});
