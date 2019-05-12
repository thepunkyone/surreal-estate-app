import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Favourites from '../../src/components/favourites';

const mockFavourites = {
  data: [
    {
      _id: '1234',
      propertyListing: {
        _id: '2345',
        title: 'Very nice flat!',
      },
      fbUserId: '3456',

    },
    {
      _id: '6776',
      propertyListing: {
        _id: '5432',
        title: 'A bright, airy house',
      },
      fbUserId: '3456',
    },
    {
      _id: '0987',
      propertyListing: {
        _id: '8765',
        title: 'Surprisingly spacious flat',
      },
      fbUserId: '5678',
    },
  ],
};

const deleteFavourite = {
  data: '',
};

jest.mock('../../src/config', () => 'mockApiUrl');
jest.mock('axios');

const getFavouritesResponse = Promise.resolve(mockFavourites);
axios.get.mockImplementation(() => getFavouritesResponse);

const deleteFavouriteResponse = Promise.resolve(deleteFavourite);
axios.delete.mockImplementation(() => deleteFavouriteResponse);

describe('Favourites Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow((
      <Favourites userId="3456" />
    ));
  });

  it('Renders only favourites which correspond to userId', () => {
    expect(wrapper.find('.favourite')).toHaveLength(2);
  });

  it('Deletes a favourite with the selected _id', () => {
    wrapper.find('.favourite[favouriteId="1234"] button').simulate('click');
    expect(axios.delete).toHaveBeenCalledWith('mockApiUrl/Favourite/1234');
  });
});
