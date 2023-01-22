import { render, waitFor } from '@testing-library/react';

import GlobalStyles from './GlobalStyles.styles';

describe('GlobalStyles Component', () => {
  it('should renders GlobalStyles correctly and reset style body', async () => {
    render(<GlobalStyles />);
    await waitFor(() => {
      expect(document.querySelector('body')).toHaveStyle({
        margin: 0,
      });
    });
  });

  it('should have reset style html', async () => {
    render(<GlobalStyles />);
    await waitFor(() => {
      expect(document.querySelector('html')).toHaveStyle({
        'line-height': 1.15,
      });
    });
  });
});
