import rem from './rem';

describe('Function convert PX to REM', () => {
  it('should convert 16px', () => {
    const resultRem = rem('16');
    expect(resultRem).toBe('1rem');
  });

  it('should convert 14px', () => {
    const restulRem = rem('16px', 10);
    expect(restulRem).toBe('1.6rem');
  });

  it('should be 0rem if dont pass a parameter', () => {
    expect(rem('')).toBe('0rem');
  });

  it('should be 0rem if pass 0 to second parameter', () => {
    expect(rem('', 0)).toBe('0rem');
  });

  it('should be 3.75rem', () => {
    expect(rem('60')).toBe('3.75rem');
  });

  it('should convert 32px', () => {
    expect(rem('32')).toBe('2rem');
  });
  it('should convert 48px to 2rem', () => {
    expect(rem('32')).toBe('2rem');
  });
});
