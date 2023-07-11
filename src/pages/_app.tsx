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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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