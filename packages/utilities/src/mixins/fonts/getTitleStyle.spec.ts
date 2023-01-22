import getTitleStyle from './getTitleStyle';

describe('title styles function', () => {
  const TITLE_STYLE = getTitleStyle();
  it('should have font Roboto', () => {
    expect(TITLE_STYLE).toEqual(
      expect.arrayContaining(["'Roboto Flex', Helvetica, Arial, sans-serif"])
    );
  });
  it('should have font size 1.625rem ', () => {
    expect(TITLE_STYLE).toEqual(expect.arrayContaining(['1.625rem']));
  });
  it('should have line height 120%', () => {
    expect(TITLE_STYLE).toEqual(expect.arrayContaining(['120%']));
  });
  it('should have font weight 700', () => {
    const TITLE_STYLEE = getTitleStyle().toLocaleString();
    expect(TITLE_STYLEE).toContain('font-weight: 700');
  });
});
