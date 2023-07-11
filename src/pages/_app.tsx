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
                {` window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-5F6J2HCKK1');`}
            </Script>
            <Script id='banners'>
                {` // Create the banner element
                    var banner = document.createElement("div");
                    banner.id = "floating-banner";

                    // Create the close button
                    var closeButton = document.createElement("span");
                    closeButton.innerHTML = "X";
                    closeButton.style.float = "right";
                    closeButton.style.cursor = "pointer";
                    closeButton.style.fontWeight = "bold";
                    closeButton.addEventListener("click", function() {
                    banner.style.display = "none";
                    });
                    banner.style.position = "fixed";
                    // banner.style.bottom = "20px";
                    banner.style.right = "20px";
                    banner.style.left = "20px";
                    banner.style.top = "78px";
                    banner.style.backgroundColor = "#0546b7";
                    banner.style.color = "white";
                    banner.style.padding = "10px";
                    banner.style.borderRadius = "5px";
                    banner.style.zIndex = "9999";
                    banner.style.border = "none";
                    banner.style.textAlign = "center";
                    banner.style.fontFamily = "Arial, sans-serif";

                    // Create the main text
                    var mainText = document.createElement("div");
                    mainText.innerHTML = 'Get 30%* off <span class="domain-text">.polygon domains</span> through August 13th. Go <a href="#" target="_blank" id="promo-link">here</a>.';
                    mainText.style.marginBottom = "10px";

                    // Create the small text
                    var smallText = document.createElement("div");
                    smallText.innerHTML = '*Maximum value of $2,000. Valid through 11:59pm PST August 13th. Cannot be combined with other coupons/promotions.';
                    smallText.style.fontSize = "12px";

                    // Append the elements to the banner
                    banner.appendChild(closeButton);
                    banner.appendChild(mainText);
                    banner.appendChild(smallText);

                    // Append the banner to the document body
                    document.body.appendChild(banner);

                    // Set the hyperlink URL with URL parameters
                    var promoLink = document.getElementById("promo-link");
                    var urlParams = new URLSearchParams(window.location.search);
                    var urlParameters = {
                    utm_source: urlParams.get("utm_source") || "",
                    utm_medium: urlParams.get("utm_medium") || "",
                    utm_campaign: urlParams.get("utm_campaign") || "",
                    code: urlParams.get("code") || "",
                    ref: urlParams.get("ref") || ""
                    };
                    var queryString = Object.keys(urlParameters)
                    .map(function(key) {
                        return encodeURIComponent(key) + "=" + encodeURIComponent(urlParameters[key]);
                    })
                    .join("&");
                    promoLink.href = "https://unstoppabledomains.com/?" + queryString;`
                }
            </Script>
        </>
    )
}