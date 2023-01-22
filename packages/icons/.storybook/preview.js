import GlobalStyles from '../../components-base-web/src/components/globalStyle/GlobalStyles.styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const GlobalStyle = (Story, context) => {
  return (
    <>
      <GlobalStyles />
      <Story {...context} />
    </>
  );
};

export const decorators = [GlobalStyle];
