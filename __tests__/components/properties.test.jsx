import '../../src/jsdom';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import Properties from '../../src/components/properties';
import PropertyCard from '../../src/components/property-card';
import axios from 'axios';

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

const mockFavourites = {
  data: [
    {
      _id: '6556',
      propertyListing: {
        _id: '1',
        title: 'A quirky little house!',
      },
      fbUserId: '1234',
    },
    {
      _id: '6776',
      propertyListing: {
        _id: '2',
        title: 'A very nice bungalow!',
      },
      fbUserId: '7890',
    },
    {
      _id: '0987',
      propertyListing: {
        _id: '3',
        title: 'Great house, under offer!',
      },
      fbUserId: '1234',
    },
  ],
};

const mockSearch = {
  data: [
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
  ],
};

const postFavourite = {
  propertyListing: '2',
  fbUserId: '1234',
};

const mockLocation = { pathname: '/', search: '' };

jest.mock('../../src/config', () => 'mockApiUrl');
jest.mock('axios');

const getPropertiesResponse = Promise.resolve(mockProperties);
const getFavouritesResponse = Promise.resolve(mockFavourites);
const getSearchResponse = Promise.resolve(mockSearch);
axios.get.mockImplementation((url) => {
  if (url === 'mockApiUrl/PropertyListing/') {
    return getPropertiesResponse;
  }
  if (url === 'mockApiUrl/Favourite/?populate=propertyListing') {
    return getFavouritesResponse;
  }
  if (url === 'mockApiUrl/PropertyListing/?query=%7B%22title%22%3A%7B%22%24regex%22%3A%22nice%22%7D%7D') {
    return getSearchResponse;
  }
  return Promise.reject();
});
const postSavedPropertyResponse = Promise.resolve();
axios.post.mockImplementation(() => postSavedPropertyResponse);
const deleteSavedPropertyResponse = Promise.resolve();
axios.delete.mockImplementation(() => deleteSavedPropertyResponse);

describe('Properties component - without userId', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount((
      <MemoryRouter>
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userId={null} />}
        />
      </MemoryRouter>
    ));
  });

  it('Gets property listings', () => {
    return getPropertiesResponse.then(() => {
      wrapper.update();
      expect(axios.get).toHaveBeenCalledWith('mockApiUrl/PropertyListing/');
      expect(axios.get).not.toHaveBeenCalledWith('mockApiUrl/Favourite/?populate=propertyListing');
      expect(wrapper.find(PropertyCard)).toHaveLength(3);
    });
  });

  it('Updates browser history when search form submitted', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'Manchester' } });
    wrapper.find('.search-form').simulate('submit');
    expect(wrapper.find(Properties).prop('history').location.search).toBe('?query=%7B%22title%22%3A%7B%22%24regex%22%3A%22Manchester%22%7D%7D');
  });

  it('Calls axios with search query', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'nice' } });
    wrapper.find('.search-form').simulate('submit');
    expect(axios.get).toHaveBeenCalledWith('mockApiUrl/PropertyListing/?query=%7B%22title%22%3A%7B%22%24regex%22%3A%22nice%22%7D%7D');
  });

  it('Displays PropertyCard components filtered by search query', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'nice' } });
    wrapper.find('.search-form').simulate('submit');
    return getSearchResponse
      .then(() => {
        wrapper.update();
        expect(wrapper.find(PropertyCard).prop('title')).toBe('A very nice bungalow!');
      });
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

  it('Gets properties and favourites', () => {
    expect(axios.get).toHaveBeenCalledWith('mockApiUrl/PropertyListing/');
    expect(axios.get).toHaveBeenCalledWith('mockApiUrl/Favourite/?populate=propertyListing');
    expect(wrapper.find(Properties).state('properties')).toEqual(mockProperties.data);
    expect(wrapper.find(Properties).state('favourites')).toEqual([
      {
        _id: '6556',
        propertyListing: {
          _id: '1',
          title: 'A quirky little house!',
        },
        fbUserId: '1234',
      },
      {
        _id: '0987',
        propertyListing: {
          _id: '3',
          title: 'Great house, under offer!',
        },
        fbUserId: '1234',
      },
    ]);
  });

  it('Checks favourites vs non-favourited properties and populates save/remove buttons', () => {
    wrapper.update();
    expect(wrapper.find('.property-card')).toHaveLength(3);
    expect(wrapper.find('.property-card .save-button')).toHaveLength(3);
    expect(wrapper.find('.property-card .remove-button')).toHaveLength(2);
  });

  it('Posts favourite', () => {
    wrapper.update();
    const saveButton = wrapper.find('.property-card .save-button').at(1);
    saveButton.simulate('click');
    expect(axios.post).toHaveBeenCalledWith('mockApiUrl/Favourite/', postFavourite);
  });

  it('Deletes favourite', () => {
    return getFavouritesResponse.then(() => {
      wrapper.update();
      const removeButton = wrapper.find('.property-card .remove-button').at(0);
      removeButton.simulate('click');
      expect(axios.delete).toHaveBeenCalledWith('mockApiUrl/Favourite/6556');
    });
  });
});
