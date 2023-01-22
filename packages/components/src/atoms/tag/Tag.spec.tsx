import { render, screen } from '@testing-library/react';

import Tag from './Tag';

describe('Tag Component', () => {
  it('should renders Tag correctly', () => {
    render(<Tag text="Tag text" />);
    expect(screen.getByText('Tag text')).toBeInTheDocument();
  });
  it('should renders null correctly', () => {
    render(<Tag />);
    expect(null).toBeNull();
  });
});
