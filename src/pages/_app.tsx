import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import type { AppProps } from 'next/app';
import "./globals.css";

import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { generalSans } from '../theme';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react'
import Script from 'next/script'
import { analyticsScript, bannerScript } from '../app/constants';


export default function App({ Component, pageProps }: AppProps<{
}>) {
    return (
        <>
            <Head>
                <title>The Unstoppable Marketplace | Unstoppable Domains</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Explore 860+ applications integrated with Unstoppable and new ways to use your Web3 domain." />
                <meta property="og:title" content="The Unstoppable Marketplace | Unstoppable Domains" />
                <meta property="og:description" content="Explore 860+ applications integrated with Unstoppable and new ways to use your Web3 domain." />
                <meta property="og:image" content="https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/The%20Unstoppable%20Marketplace_LandingPage_Thumbnail.png" />
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>

                    <Layout className={generalSans.className}>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </Provider>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-5F6J2HCKK1" ></Script>
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