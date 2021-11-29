import Router from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';
import { ScrollProvider } from '../lib/useScroll';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/nprogress.css';

import withData from '../lib/withData';

import LayoutWrapper from '../components/layouts/LayoutWrapper';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// changr LayoutWrapper to getLayput in production if not find other options

function MyApp({ Component, pageProps, apollo }) {

  return (
    <ApolloProvider client={apollo}>
      <ParallaxProvider>
        <ScrollProvider>
          <LayoutWrapper {...pageProps}>
            <Component {...pageProps} />
          </LayoutWrapper>
        </ScrollProvider>
      </ParallaxProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx}) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
