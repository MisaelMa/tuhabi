import {
  CSSObject,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedCssFunction,
  css,
} from 'styled-components';

import { BREAKPOINTS } from '@ammc/commons/constants/breakpoints';

const breakpoints = Object.keys(BREAKPOINTS) as (keyof typeof BREAKPOINTS)[];
/**
 * Breakpoints mixin for styled components in web
 *
 * @example ${ media.md`background: black;` }
 */

export default breakpoints.reduce(
  (acc, label) => ({
    /**
     * Callback function
     *
     * @param acc is the function for each element of array
     */
    ...acc,
    /**
     * Label are the breakpoints
     *
     * @param first is the array of strings to all css
     * @param {...args} args is the another data that can be a array of string
     */
    [label]: (
      first: CSSObject,
      ...args: string[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: ${BREAKPOINTS[label]}px) {
        ${css(first, ...args)};
      }
    `,
  }),
  {} as {
    [key in keyof typeof BREAKPOINTS]: ThemedCssFunction<DefaultTheme>;
  }
);
