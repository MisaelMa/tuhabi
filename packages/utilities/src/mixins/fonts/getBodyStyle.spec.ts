import getBodyStyle from './getBodyStyle';

describe('Body styles function', () => {
  const BODY_STYLE = getBodyStyle();
  it('should have Poppins font', () => {
    expect(BODY_STYLE).toEqual(
      expect.arrayContaining(["'Poppins', Helvetica, Arial, sans-serif"])
    );
  });
  it('should have line height to 120%', () => {
    expect(BODY_STYLE).toEqual(expect.arrayContaining(['120%']));
  });
  it('should have font size 1rem', () => {
    expect(BODY_STYLE).toEqual(expect.arrayContaining(['1rem']));
  });
});
