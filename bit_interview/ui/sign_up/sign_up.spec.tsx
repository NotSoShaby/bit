import React from 'react';
import { render } from '@testing-library/react';
import { BasicSignUp } from './sign_up.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSignUp />);
  const rendered = getByText('hello from SignUp');
  expect(rendered).toBeTruthy();
});
