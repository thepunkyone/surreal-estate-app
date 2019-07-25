import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/alert';

describe('Alert component renders an error message', () => {
  const wrapper = shallow((<Alert message="Error!" />));

  it('Error message displayed in inner HTML', () => {
    expect(wrapper.find('.alert').text()).toBe('Error!');
  });
});

describe('Alert component renders a success message', () => {
  const wrapper = shallow((<Alert message="Success!!!" success />));

  it('Success message displayed in inner HTML', () => {
    expect(wrapper.find('.alert.success').text()).toBe('Success!!!');
  });
});
