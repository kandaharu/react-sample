import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import App from './App';

describe('App', () => {
  test('routing /index and render /index', () => {
    const history = createMemoryHistory();
    history.push('/index');
    render(
      <Router history={history}>
        <App />
      </Router>,
    );
    expect(screen.getByText(/chakra-ui/i)).toBeInTheDocument();
  });
});
