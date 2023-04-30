import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Config from '@config';
import GlobalStyle from '../styles/global-style';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            keepPreviousData: true,
          },
        },
      })
  );

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Config.Theme}>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)};
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
