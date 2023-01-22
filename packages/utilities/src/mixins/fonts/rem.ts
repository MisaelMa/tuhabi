/**
 * Convert px to rem units with styled components
 *
 * @example font-size: ${rem(15)}; or font-size: ${rem('15px')};
 * @example font-size @{rem`15`};
 * @param {number|string} number - number in px to convert
 * @param {number} [base = 16] - base
 */
export default function rem(number: string, base = 16): string {
  // fallback to 0
  const realNumber: string = number || '0';
  // can't divide the world by 0, resets to base 16px
  const realBase: number = base === 0 ? 16 : base;

  return `${parseFloat(realNumber) / realBase}rem`;
}
