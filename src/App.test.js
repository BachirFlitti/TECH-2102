import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group number', () => {
  render(<App />);
  const textElement = screen.getByText(/Group 8/i);
  expect(textElement).toBeInTheDocument();
});
