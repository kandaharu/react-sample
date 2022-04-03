import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('Main', () => {
  test('renders chakra-ui title', () => {
    render(<Main />);
    const titleElement = screen.getByText(/chakra-ui/i);
    expect(titleElement).toBeInTheDocument();
  });
});
