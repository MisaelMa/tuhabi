import getTagStyle from './getTagStyle';

describe('Tag styles', () => {
  const TAG_STYLE = getTagStyle();
  it('should have Roboto font', () => {
    expect(TAG_STYLE).toEqual(
      expect.arrayContaining(["'Roboto Flex', Helvetica, Arial, sans-serif"])
    );
  });
  it('should have font size 0.75rem', () => {
    expect(TAG_STYLE).toEqual(expect.arrayContaining(['0.75rem']));
  });

  it('should have line height', () => {
    expect(TAG_STYLE).toEqual(expect.arrayContaining(['150%']));
  });
  it('should have letter spacing', () => {
    const TAG_STYLEE = getTagStyle().toLocaleString();
    expect(TAG_STYLEE).toContain('letter-spacing: 3%');
  });
});
