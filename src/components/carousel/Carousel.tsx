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
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-propykeys.png",
      "utm": "https://unstoppableweb.co/4ePQE3R",
      "title": "Own It with .Propykeys!",
      "subtitle": "We’ve teamed up with Propykeys, our first dApp on Base network, to launch .Propykeys - the innovative domain for the onchain real estate revolution.",
      "button": "Get a .Propykeys!"
    }, 
    {
      "image": "https://dxk8hwnj7akaq.cloudfront.net/mumu-tld.app/images/banner-cd080bcc-d15a-4757-8022-df2075b4c7ce.png",
      "utm": "https://get.unstoppabledomains.com/mumu/",
      "title": "Join the Bullish Muuvement with .MUMU!",
      "subtitle": "We’ve teamed up with MUMU, a top ten memecoin on the Solana blockchain inspired by the bull market's mascot, to introduce .MUMU domains! - Join the MUMU community today with .MUMU!",
      "button": "Get a .MUMU!"
    }, 
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/benjisplash.png",
      "utm": "https://get.unstoppabledomains.com/benji/",
      "title": "Who let the .Benji out?!!",
      "subtitle": "We’ve teamed up with Basenji for our first-ever TLD partnership with a memecoin on Base network - Join the Basenji community today with .Benji!",
      "button": "Get a .Benji!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/Dream%20Launch%20Asset%20-%20Rectangular%20(1).png",
      "utm" : "https://domain.somnia.network/",
      "title" : " Awaken Your Imagination with .Dream",
      "subtitle": "We’ve partnered with Somnia, the innovative Dream Computer that’s transforming the landscape of Web3 to launch .dream!",
      "button": "Get a .Dream", 
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/LFG%20Launch%20Asset%20-%20Rectangular%20(4).png",
      "utm" : "https://unstoppableweb.co/3zekfoe",
      "title" : "Rise Up and Game On with .LFG",
      "subtitle": "We’ve partnered with LFG Incorporated to launch .LFG, “Let’s Fight Giants”, giving gamers and crypto enthusiasts a unique digital identity that represents web3 culture.",
      "button": "Get a .LFG", 
    }
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
              {banner?.image && <img
                  className="relative w-auto h-auto max-h-[150px] md:max-h-[200px] mx-auto rounded-3xl object-contain lg:cursor-pointer"
                  src={banner?.image}
                  alt={`Banner ${index + 1}`}
                  onClick={() => urlRedirect(banner?.utm)}
                />
              }
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
