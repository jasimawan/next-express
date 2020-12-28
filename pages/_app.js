// import App from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import UserProvider from '../components/UserProvider';
function MyApp({ Component, pageProps }) {
    const client = useApollo(pageProps.initialApolloState);
    return (
        <ApolloProvider client={client}>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </ApolloProvider>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
