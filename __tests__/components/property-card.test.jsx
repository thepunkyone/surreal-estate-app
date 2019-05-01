import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/components/property-card';

describe('PropertyCard component test', () => {
  const wrapper = shallow((
    <PropertyCard
      title="A quirky little house!"
      type="Semi-Detached"
      bathrooms="1"
      bedrooms="3"
      price="210000"
      city="Manchester"
      email="thepunkyone@hotmail.com"
    />
  ));
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
});
