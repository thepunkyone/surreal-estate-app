import React from 'react';
import { shallow } from 'enzyme';
import Favourites from '../../src/components/favourites';

const mockFavourites = [
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
];

describe('Favourites Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow((
      <Favourites favourites={mockFavourites} userId={3456} />
    ));
  });
  it('Renders only favourites which correspond to userId', () => {
    expect().toBe();
  });
});
