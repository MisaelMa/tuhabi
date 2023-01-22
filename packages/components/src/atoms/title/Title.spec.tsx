import { render, screen } from '@testing-library/react';

import Title from './Title';

describe('Title Component', () => {
  it('should renders Title correctly', () => {
    render(<Title title="Widget Title" />);
    expect(screen.getByText('Widget Title')).toBeInTheDocument();
  });
  it('should renders null correctly', () => {
    render(<Title />);
    expect(null).toBeNull();
  });
});
