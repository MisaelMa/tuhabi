import { render, screen } from '@testing-library/react';

import DemoComponent from './DemoComponent';

describe('DemoComponent Component', () => {
  it('should renders DemoComponent correctly', () => {
    render(<DemoComponent />);
    expect(screen.getByText('hello world')).toBeInTheDocument();
  });
});
