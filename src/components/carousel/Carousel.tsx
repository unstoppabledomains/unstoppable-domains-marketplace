import React, { useCallback } from 'react'
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType
} from 'embla-carousel-react'
import { DotButton, useDotButton } from './CarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrowButton'

type PropType = {
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(
    { delay: 7000, stopOnInteraction: false}
  )])

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins()
    if (!autoplay) return
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  )
// prev next button functionality
/*
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onButtonClick)
*/
  const bannerData = [
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/UD%20x%20Web3%20Compass.png",
      "utm": 'https://web3compass.net/',
      "title": "Web3 Compass launches the first Web3 search engine.",
      "subtitle": "The Web3 search engine, Web3 Compass, is now resolving and selling Unstoppable Domains!",
      "button": 'Visit Web3 Compass'
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/one-stop-shop-new.png",
      "utm": 'https://unstoppableweb.co/3tNgbbD',
      "title": "Your One-Stop Shop for both Web3 and Web2 domains",
      "subtitle": "You can now purchase “.com” addresses, alongside their native Web3 addresses all in one place, on unstoppabledomains.com.",
      "button": 'Learn more'
    }, 
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-webacy.png",
      "utm": 'https://unstoppabledomains.com/blog/categories/announcements/article/unstoppable-integrates-webacy',
      "title": "Webacy's Wallet Safety Score comes to your UD.me/ profile!",
      "subtitle": "Understand your wallet's vulnerability in real-time with insights from wallet age, smart contract integrity, and transaction activity.",
      "button": 'Learn More'
    }, 
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-polygon-domains.png",
      "utm": 'https://unstoppableweb.co/3PZafVs',
      "title": "Join the .polygon community for as little as $5.",
      "subtitle": "Grab a .polygon domain for as little as $5 and stay up-to-date with everything happening in the Polygon Ecosystem via messaging.",
      "button": 'Get a domain'
    }, 
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-sandbox-smobler-blue.png",
      "utm": 'https://finance.yahoo.com/news/unstoppable-domains-sandbox-smobler-forge-010000752.html',
      "title": "UD x The Sandbox Game x Smobler Studios",
      "subtitle": "We're joining forces to unveil the “Unstoppable Experience” in-game. A bustling in-game marketplace awaits with unique wearables for UD holders. Coming soon, stay tuned for updates.",
      "button": 'Read More'
    },
  ]

  const urlRedirect = (url) => {
    if (url) {
      window?.open(url, '_blank')?.focus()
    }
  }

  return (
    <div className='mx-auto'>
      <div className="overflow-hidden rounded-3xl mt-1 " ref={emblaRef}>
        <div className="flex touch-pan-y">
          {bannerData.map((banner, index) => (
            <div className="flex-[0_0_100%] min-w-0 min-h-0 relative pl-2 pr-2" key={index}>
              <img
                className="relative w-auto h-auto max-h-[150px] md:max-h-[200px] mx-auto rounded-3xl object-contain lg:cursor-pointer"
                src={banner?.image}
                alt={`Banner ${index + 1}`}
                onClick={() => urlRedirect(banner?.utm)}
              />
                {banner?.title && <div className="mt-2 rounded-3xl max-w-[80%] md:max-w-[100%] mx-auto">
                  <div className="mx-auto justify-center flex flex-col md:flex-row pt-2 pb-2 md:pt-4 md:pb-4">
                    <div className="text-center flex flex-col mx-auto md:pr-4 md:pl-4 text-white break-normal" >
                        <div className="font-[500] text-[18px] md:text-[1.5rem] mb-1 ">
                            <p>{banner?.title}</p>
                        </div>
                        <div className='flex flex-col h-auto'>
                          {banner?.subtitle && <div className="text-[14px] md:text-[1rem] relative align-middle justify-center items-center mb-3">{banner?.subtitle}</div>}
                          {banner?.button && <button className='bg-white text-black max-w-1/2 mx-auto py-2 px-4 rounded-full align-middle justify-center items-center min-w-[100px] font-[500] text-[14px] md:text-[1rem] lg:cursor-pointer'
                            onClick={() => urlRedirect(banner?.utm)}
                            >
                              {banner?.button}
                            </button>
                          }
                        </div>
                    </div>
                  </div>
                </div>
                }
            </div>
          ))}
        </div>
      </div>
      <div className='flex mt-1'>
        <div className="bg-transparent touch-manipulation inline-flex border-0 p-0 m-0 mx-auto">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'w-[1.4rem] h-[7px] md:w-[2.4rem] md:h-[5px] flex mr-[0.75rem] ml-[0.75rem] rounded-full mx-auto cursor-pointer'.concat(
                index === selectedIndex ? ' bg-white ' : ' bg-slate-500'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
