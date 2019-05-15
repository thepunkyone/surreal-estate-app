import '../../src/jsdom';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import Properties from '../../src/components/properties';
import PropertyCard from '../../src/components/property-card';
import axios from 'axios';

const postFavourite = {
  propertyListing: '1',
  fbUserId: '1234',
};

const mockProperties = { 
  data: [
    {
      _id: '1',
      title: 'A quirky little house!',
      type: 'Semi-Detached',
      bathrooms: 1,
      bedrooms: 3,
      price: 210000,
      city: 'Manchester',
      email: 'thepunkyone@hotmail.com',
    },
    {
      _id: '2',
      title: 'A very nice bungalow!',
      type: 'Bungalow',
      bathrooms: 1,
      bedrooms: 2,
      price: 180000,
      city: 'Liverpool',
      email: 'thepunkyone@hotmail.com',
    },
    {
      _id: '3',
      title: 'Great house, under offer!',
      type: 'Terraced',
      bathrooms: 1,
      bedrooms: 4,
      price: 280000,
      city: 'Manchester',
      email: 'thepunkyone@hotmail.com',
    },
  ],
};

const mockLocation = { pathname: '/', search: '' };

jest.mock('../../src/config', () => 'mockApiUrl');
jest.mock('axios');

const getPropertiesResponse = Promise.resolve(mockProperties);
axios.get.mockImplementation(() => getPropertiesResponse);
axios.post.mockImplementation(() => Promise.resolve());

describe('Properties component - without userId', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount((
      <MemoryRouter>
        <Properties location={mockLocation} history={[]} userId={null} />
      </MemoryRouter>
    ));
  });

  it('Gets property listings', () => {
    return getPropertiesResponse.then(() => {
      wrapper.update();
      console.log(wrapper.debug());
      expect(axios.get).toHaveBeenCalledWith('mockApiUrl/PropertyListing/');
      expect(axios.get).not.toHaveBeenCalledWith('mockApiUrl/Favourite/?populate=propertyListing');
    });
  });

  it('Updates history when search form submitted', () => {
    wrapper.find('.search-form').simulate('submit');
    expect(wrapper.find(PropertyCard).prop('history')).toEqual(['?query=%7B%22title%22%3A%7B%22%24regex%22%3A%22%22%7D%7D']);
  });
});

describe('Properties component - with userId', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount((
      <MemoryRouter>
        <Properties location={mockLocation} userId="1234" />
      </MemoryRouter>
    ));
  });

  it('Gets favourites', () => {
    expect(axios.get).toHaveBeenCalledWith('mockApiUrl/PropertyListing/');
    expect(axios.get).toHaveBeenCalledWith('mockApiUrl/Favourite/?populate=propertyListing');
  });

  it('Add favourites', () => {
    console.log(wrapper.find(PropertyCard).debug());
    wrapper.find(PropertyCard).get(0);
    // expect(axios.post).toHaveBeenCalledWith('mockApiUrl/Favourite', postFavourite);
  });
});
