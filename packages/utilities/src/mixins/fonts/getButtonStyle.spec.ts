import getButtonStyle from './getButtonStyle';

describe('Button styles function', () => {
  const BUTTON_STYLE = getButtonStyle();
  it('should have font poppins', () => {
    expect(BUTTON_STYLE).toEqual(
      expect.arrayContaining(["'Poppins', Helvetica, Arial, sans-serif"])
    );
  });
  it('should have font size 1rem', () => {
    expect(BUTTON_STYLE).toEqual(expect.arrayContaining(['1rem']));
  });

  it('should have letter spacing', () => {
    const BUTTON_STYLEE = getButtonStyle().toLocaleString();
    expect(BUTTON_STYLEE).toContain('letter-spacing: 0');
  });

  it('should have font weight', () => {
    const BUTTON_STYLEE = getButtonStyle().toLocaleString();
    expect(BUTTON_STYLEE).toContain('font-weight: 700');
  });

  it('should have a media query', () => {
    const BUTTON_STYLEE = getButtonStyle().toLocaleString();
    expect(BUTTON_STYLEE).toContain('@media (min-width: ,1024,px)');
  });
  it('should have 1.25rem on media query 1024px', () => {
    const BUTTON_STYLEE = getButtonStyle().toLocaleString();
    expect(BUTTON_STYLEE).toContain('1.25rem');
  });
});
