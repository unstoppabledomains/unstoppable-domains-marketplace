import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import "./globals.css";

import Head from 'next/head';
import Script from 'next/script';
import { PersistGate } from 'redux-persist/integration/react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { analyticsScript, bannerScript } from '../app/constants';
import Layout from "../components/layout";
import { generalSans } from '../theme';


export default function App({ Component, pageProps }: AppProps<{
}>) {
    return (
        <>
            <Head>
                <title>Unstoppable Apps | Unstoppable Domains</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Explore 860+ applications integrated with Unstoppable and new ways to use your Web3 domain." />
                <meta property="og:title" content="The Unstoppable Marketplace | Unstoppable Domains" />
                <meta property="og:description" content="Explore 860+ applications integrated with Unstoppable and new ways to use your Web3 domain." />
                <meta property="og:image" content="https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/The%20Unstoppable%20Marketplace_LandingPage_Thumbnail.png" />
                <link rel="icon" href="https://storage.googleapis.com/unstoppable-client-assets/images/favicon/favicon-v3.ico" sizes="any" />
                <link rel="icon" type="image/svg+xml" href="https://storage.googleapis.com/unstoppable-client-assets/images/favicon/icon.svg" />
                <link rel="apple-touch-icon" href="https://storage.googleapis.com/unstoppable-client-assets/images/favicon/apple-touch-icon.png" />
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>

                    <Layout className={generalSans.className}>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </Provider>
            <Script id='ga'>
                {
                    analyticsScript
                }
            </Script>
            <Script id='banners'>
                {
                    bannerScript
                }
            </Script>
        </>
    )
}
