import { css } from 'styled-components';
import getTitleStyle from '@ammc/utilities/mixins/fonts/getTitleStyle';

export default {
  wrapper: css`
    ${getTitleStyle};
    display: flex;
  `,
};
