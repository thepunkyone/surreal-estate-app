import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/alert';

describe('Alert component test', () => {
  const wrapper = shallow((<Alert />));

  it('The default message of Alert component is Error!', () => {
    expect(wrapper.text()).toEqual('Error!');
  });
  it('The default value of Alert component\'s success prop is false', () => {
    expect(wrapper.prop('success')).toEqual(false);
  });
});
