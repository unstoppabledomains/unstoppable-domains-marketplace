import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  EmblaOptionsType,
  EmblaCarouselType
} from "embla-carousel";
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
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-squarespace-hack.png",
      "utm": null,
      "title": "Unstoppabledomains.com has been subject to an attack.",
      "subtitle": "Do NOT open emails from @unstoppabledomains.com or use the website until further notice.",
      "button": null
    },
    /*
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/stepnbanner.png",
      "utm": "https://unstoppableweb.co/3VQbmZw",
      "title": "A .Stepn the Right Direction",
      "subtitle": "We're hitting the track with STEPN, the Web3 lifestyle app that rewards people for walking, jogging, and running, to launch .stepn domains!",
      "button": "Get a .Stepn Domain!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-cryptocom-drop.png",
      "utm": "https://crypto.com/nft/drops-event/c14edda7cb07d48fb9a36015d31057da?tab=shop",
      "title": "Premium Onchain Domains at Special Prices",
      "subtitle": "We've collaborated with Crypto.com to drop 200 never-before-released domains. For 30 days only, enjoy special prices on domains like .crypto, x.x, .bitcoin and more.",
      "button": "Shop the Drop!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-pudgyworld.png",
      "utm": "https://unstoppableweb.co/3OHW7yS",
      "title": "Access Pudgy World With Your .Pudgy Domain",
      "subtitle": "Starting Q4 2024, you'll be able to enter the whimsical Pudgy World using your very own .Pudgy domain (e.g., Luca.Pudgy).",
      "button": "Get your .Pudgy domain!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/marketplace-announcement.png",
      "utm": "https://unstoppablemarketplace.com/",
      "title": "A Brand New Unstoppable Marketplace Has Arrived!",
      "subtitle": "Buy and Sell tokenized .com and web3 domains directly from our website. Featuring an easy-to-use interface, flexible payment options and automatic transfers!",
      "button": "Check it Out!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-hive3.png",
      "utm": "https://hive3.tech/",
      "title": "Login to Hive3 with your Domain",
      "subtitle": "Level up your tech education! Login to Hive3’s blockchain-based learning platform with your Unstoppable domain.",
      "button": "Give it a Try!"
    },
    */
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
              className={'w-[1.2rem] h-[7px] md:w-[2.2rem] md:h-[5px] flex mr-[0.75rem] ml-[0.75rem] rounded-full mx-auto cursor-pointer'.concat(
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
