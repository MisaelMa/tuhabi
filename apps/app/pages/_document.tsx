import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import React, { Fragment } from 'react';

import { AppInitialProps } from 'next/app';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';
import {createEmotionCache} from '../common/cache/index';
import createEmotionServer from '@emotion/server/create-instance';

// import { theme } from '../common/theme/app';
  
  /**
   *
   * @param root0
   */
  const AppDocument = ({ ...initialProps }: Document & AppInitialProps) => {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script type="text/javascript" />
      </Html>
    );
  };
  
  AppDocument.getInitialProps = async (ctx: DocumentContext) => {

    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
  
    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
  
    /**
     *
     */
    ctx.renderPage = () =>
      originalRenderPage({
        /**
         *
         * @param App
         */
        enhanceApp: (App: any) => (props) =>
          styledComponentsSheet.collectStyles(
            <App emotionCache={cache} {...props} />,
          ),
      });
  
    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));
  
    return {
      ...initialProps,
      emotionStyleTags,
      styles: [
        <Fragment key={0}>
          {initialProps.styles}
          {styledComponentsSheet.getStyleElement()}
        </Fragment>,
      ],
    };
  };
  
  export default AppDocument;