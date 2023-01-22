import "../styles/globals.css";

import * as React from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";
import type { NextPage, NextPageContext } from "next";
import { Provider, ReactReduxContext } from "react-redux";

import AppLayout from "../components/layouts";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "../common/createEmotionCache";
import theme from "../common/theme";
import { wrapper } from "../store";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

type NextPageWithLayout = NextPage & {
  Layout?: JSX.Element;
};

/**
 *
 * @param root0
 * @param root0.Component
 */
const MyApp = ({ Component, ...rest }: MyAppProps) => {
  const { emotionCache = clientSideEmotionCache, pageProps } = rest;
  const { store, props } = wrapper.useWrappedStore(rest);
  console.log(store);

  const LayoutPage = Component.Layout || (AppLayout as any);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <PersistGate persistor={store._persistor} loading={null}>
            <LayoutPage>
              <Component {...pageProps} />
            </LayoutPage>
          </PersistGate>
        </Provider>
        {/* <Provider store={store}>

          <LayoutPage>
            <Component {...pageProps} />
          </LayoutPage>


        </Provider> */}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
