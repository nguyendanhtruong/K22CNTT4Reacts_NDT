import { render, screen } from '@testing-library/react';

import NdtApp from './NdtApp';

test('renders learn react link', () => {
  render(<NdtApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
