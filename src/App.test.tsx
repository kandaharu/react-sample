import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chakra-ui title', () => {
  render(<App />);
  const titleElement = screen.getByText(/chakra-ui/i);
  expect(titleElement).toBeInTheDocument();
});
