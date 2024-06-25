export const App = {
    homePage: "Unstoppable Domains",
    homePageLogo: {
        height: 42,
        width: 165,
        src: "/udlogo_transparent.png",
    },
    marketName: "Web Store",
    marketLogo: {
        height: 42,
        width: 165,
        src: "/ud-apps-logo.png",
    },
    
    menu: [
        // {
        //     'href': '/',
        //     title: 'dApps',
        // },
        // {
        //     'href': '/categories',
        //     title: 'Categories',
        // },
    ],
};

interface AppConfig {
    title: string;
    chainId: number;
    hero: {
        title: string;
        subtitle: string;
        button: {
            text: string;
            href: string;
        };
        video: string;
    };
}

// const zkevmConfig:AppConfig = {
//     title: "zkEVM dApps",
//     chainId: 1101,
//     hero: {
//         title: "Experience the newest   and your favourite  dApps on #zkEVM ",
//         subtitle: "The dApps in our ecosystem set the standard for privacy, security and content quality.",
//         button: {
//             text: 'Submit your dApp',
//             href: '',
//         },
//         video:"https://player.vimeo.com/video/791153931?h=969d328799"
//     },
// }

const posConfig: AppConfig = {
    title: "Apps",
    chainId: 137,
    hero: {
        title: "Discover, Connect, Explore.",
        subtitle:
            "Your gateway to endless opportunities for utilizing your Web3 domain, all in one destination.",
        button: {
            text: "Become a Partner",
            href: "https://unstoppableweb.co/3L8fteG",
        },
        video: "https://player.vimeo.com/video/791153898?h=da72488da5",
    },
};

/*
const bannerScript: string = ` // Create the banner element
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

                    // Styling
                    banner.style.position = "fixed";
                    banner.style.bottom = "10px";
                    banner.style.right = "20px";
                    banner.style.left = "20px";
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
                    mainText.innerHTML = '.polygon $2 domain sale! 8 character+ domains are now $2 for a limited time. <a target="_blank" href="#" id="promo-link"><b><u>Get yours now</b></u></a>.';
                    mainText.style.marginBottom = "10px";
                    mainText.style.marginTop = "10px";
                    mainText.style.wordSpacing = "1px";

                    // Create the small text
                    //var smallText = document.createElement("div");
                    //smallText.innerHTML = '*Maximum value of $2,000. Valid through 11:59pm PST August 13th. Cannot be combined with other coupons/promotions.';
                    //smallText.style.fontSize = "12px";

                    // Append the elements to the banner
                    banner.appendChild(closeButton);
                    banner.appendChild(mainText);
                    //banner.appendChild(smallText);

                    // Append the banner to the document body
                    document.body.appendChild(banner);

                    // Set the hyperlink URL with URL parameters
                    var promoLink = document.getElementById("promo-link");
                    promoLink.style.fontWeight = "bold";
                    promoLink.href = "https://unstoppableweb.co/3LnduDI";`;
*/
const bannerScript: string = ``;
                    
const analyticsScript = ` window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-5F6J2HCKK1');`;

export type { AppConfig };
export { };
export { posConfig, bannerScript, analyticsScript };
