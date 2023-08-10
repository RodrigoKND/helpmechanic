import { render, screen } from '@testing-library/react';
import App from './App';


test('renders new react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
