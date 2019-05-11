import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Favourites from '../../src/components/favourites';

const mockFavourites = {
  data: [
    {
      _id: '1234',
      propertyListing: '2345',
      fbUserId: '3456',

    },
    {
      _id: '6776',
      propertyListing: '5432',
      fbUserId: '3456',
    },
    {
      _id: '0987',
      propertyListing: '8765',
      fbUserId: '5678',
    },
  ],
};

jest.mock('axios');
const getPropertiesMock = Promise.resolve(mockFavourites);
axios.get.mockImplementation(() => getPropertiesMock);

describe('Favourites Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow((
      <Favourites userId="3456" />
    ));
  });
  it('Renders only favourites which correspond to userId', () => {
    getPropertiesMock.then(() => {
      expect(wrapper.find('.favourite')).toHaveLength(2);
    });
  });
});
