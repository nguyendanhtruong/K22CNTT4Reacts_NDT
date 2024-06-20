import { render, screen } from '@testing-library/react';
import NdtApp from '../../../lesson09/lesson09/src/NdtApp';

test('renders learn react link', () => {
  render(<NdtApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
