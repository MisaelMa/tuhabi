import { CacheProvider, EmotionCache } from '@emotion/react'

import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../common/cache'
import { getLayout } from '@vercel/examples-ui'
import theme from '../common/theme'

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function MyApp(props: MyAppProps) {
 

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = getLayout<any>(Component);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>   
      </ThemeProvider>
    </CacheProvider>
  );
}
