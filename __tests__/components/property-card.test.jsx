import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import PropertyCard from '../../src/components/property-card';

//must add axios requests

describe('PropertyCard component test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow((
      <PropertyCard
        _id="3456"
        title="A quirky little house!"
        type="Semi-Detached"
        bathrooms={1}
        bedrooms={3}
        price={210000}
        city="Manchester"
        email="thepunkyone@hotmail.com"
        userId={null}
        onSaveProperty={jest.fn()}
        onRemoveProperty={jest.fn()}
      />
    ));
  });

  it('Renders the title prop correctly', () => {
    expect(wrapper.find('.title').text()).toBe('A quirky little house!');
  });
  it('Renders the type prop correctly', () => {
    expect(wrapper.find('.type').text()).toBe('Semi-Detached');
  });
  it('Renders the bathrooms prop correctly', () => {
    expect(wrapper.find('.bathrooms').text()).toBe('1');
  });
  it('Renders the bedrooms prop correctly', () => {
    expect(wrapper.find('.bedrooms').text()).toBe('3');
  });
  it('Renders the price prop correctly', () => {
    expect(wrapper.find('.price').text()).toBe('210000');
  });
  it('Renders the city prop correctly', () => {
    expect(wrapper.find('.city').text()).toBe('Manchester');
  });
  it('Renders the email prop correctly', () => {
    expect(wrapper.find('.email').text()).toBe('thepunkyone@hotmail.com');
  });
  it('Doesn\'t render save button without a userId', () => {
    expect(wrapper.find('.save-button')).toHaveLength(0);
  });
  it('Renders save button if userId present', () => {
    wrapper.setProps({ userId: '1234' });
    expect(wrapper.find('.save-button span').text()).toBe('Save');
  });
  it('Renders remove button is userId and isFavourite props are passed', () => {
    wrapper.setProps({ userId: '1234', isFavourite: true });
    expect(wrapper.find('.remove-button span').text()).toBe('Saved Properties');
  });
});
