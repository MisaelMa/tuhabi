import getLabelStyle from './getLabelStyle';

describe('Button styles function', () => {
  const LABEL_STYLE = getLabelStyle();
  it('should have font roboto', () => {
    expect(LABEL_STYLE).toEqual(
      expect.arrayContaining(["'Roboto Flex', Helvetica, Arial, sans-serif"])
    );
  });
  it('should have font size .875rem', () => {
    expect(LABEL_STYLE).toEqual(expect.arrayContaining(['0.875rem']));
  });

  it('should have line height 150', () => {
    expect(LABEL_STYLE).toEqual(expect.arrayContaining(['150%']));
  });
});
