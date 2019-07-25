import '../../src/jsdom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../../src/components/app';
import NavBar from '../../src/components/nav-bar';
import Properties from '../../src/components/properties';
import AddProperty from '../../src/components/add-property';
import Favourites from '../../src/components/favourites';

jest.mock('../../node_modules/react-facebook-login/dist/facebook-login-with-button.js', () => () => 'Facebook');

describe('App component test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount((
      <MemoryRouter
        initialEntries={['/']}
        initialIndex={0}
      >
        <App />
      </MemoryRouter>
    ));
  });


  it('Displays Properties component on root', () => {
    expect(wrapper.find(Properties)).toHaveLength(1);
    expect(wrapper.find(AddProperty)).toHaveLength(0);
    expect(wrapper.find(Favourites)).toHaveLength(0);
  });

  it('Displays NavBar component', () => {
    expect(wrapper.find(NavBar)).toHaveLength(1);
  });

  it('Displays AddProperty component on add-property path', () => {
    wrapper = mount((
      <MemoryRouter
        initialEntries={['/add-property']}
        initialIndex={0}
      >
        <App />
      </MemoryRouter>
    ));
    expect(wrapper.find(AddProperty)).toHaveLength(1);
    expect(wrapper.find(Properties)).toHaveLength(0);
    expect(wrapper.find(Favourites)).toHaveLength(0);
  });

  it('Displays Favourites component on saved-properties path', () => {
    wrapper = mount((
      <MemoryRouter
        initialEntries={['/saved-properties']}
        initialIndex={0}
      >
        <App />
      </MemoryRouter>
    ));
    expect(wrapper.find(Favourites)).toHaveLength(1);
    expect(wrapper.find(AddProperty)).toHaveLength(0);
    expect(wrapper.find(Properties)).toHaveLength(0);
  });
});
