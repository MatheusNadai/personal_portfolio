import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';

import GlobalStyles from '../styles/globals';
import { theme } from '../theme/primary';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Header /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
