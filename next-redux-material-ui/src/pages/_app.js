
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import makeStore from '../store'
import Layout from '../theming/layout';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theming/theme';

import './style.scss' 


/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/


class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        // we can dispatch from here too
        ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        
        return { pageProps };
    }
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps, store } = this.props;
    
        return (
            <React.Fragment>
                <Head>
                    <title>Catalent</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    
                    <Provider store={store}>
                        <Layout>
                            <CssBaseline />
                            <Component {...pageProps} />
                        </Layout>
                    </Provider>
                </ThemeProvider>
            </React.Fragment>
        );
    }

}

export default withRedux(makeStore)(MyApp);