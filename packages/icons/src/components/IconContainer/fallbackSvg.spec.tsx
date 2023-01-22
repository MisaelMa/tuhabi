import React from 'react';
import { render } from '@testing-library/react';

import FallbackSvg from './fallbackSvg';

describe('fallback svg Component', () => {
  it('should renders Icon correctly', () => {
    const { container } = render(<FallbackSvg />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
  });
});
