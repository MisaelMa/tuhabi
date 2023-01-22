import media from './media';

describe('Test media function', () => {
  it('should render media query 880px', () => {
    const MD = media.xs`
        font-family: 'Roboto';
    `;

    expect(MD.toString()).toContain('@media (min-width: ,480,px)');
  });
  it('should render media query 768px', () => {
    const MD = media.sm`
        font-family: 'Roboto';
    `;

    expect(MD.toString()).toContain('@media (min-width: ,768,px)');
  });
  it('should render media query 1024px', () => {
    const MD = media.md`
        font-family: 'Roboto';
    `;

    expect(MD.toString()).toContain('@media (min-width: ,1024,px)');
  });
  it('should render media query 1280px', () => {
    const MD = media.lg`
        font-family: 'Roboto';
    `;

    expect(MD.toString()).toContain('@media (min-width: ,1280,px)');
  });
  it('should render media query 1440px', () => {
    const MD = media.xl`
        font-family: 'Roboto';
    `;

    expect(MD.toString()).toContain('@media (min-width: ,1440,px)');
  });
});
