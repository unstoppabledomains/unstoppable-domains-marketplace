import { Provider } from 'react-redux';
import { store } from '../store';
import type { AppProps } from 'next/app';
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import type { Session } from 'next-auth';

import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { generalSans } from '../theme';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps<{
    session: Session;
}>) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Provider store={store}>
                <Layout className={generalSans.className}>
                    <Component {...pageProps} />

                </Layout>

            </Provider>
        </>
    )
}