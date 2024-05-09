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
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/witg-thumbnail",
      "utm": "https://get.unstoppabledomains.com/witg/",
      "title": "Empowering Women in Tech: Introducing .WITG Domains!",
      "subtitle": "We've partnered with Women In Tech Global to launch .WITG domains! Women in Tech Global is on a mission to empower 5 million women and girls in tech by 2030, spanning 48 countries across 6 continents.",
      "button": "Get Yours Today!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-clay.png",
      "utm": "https://unstoppableweb.co/3Q2xrC2",
      "title": "Get ready to break the mold with .CLAY!",
      "subtitle": "Introducing .CLAY domains in partnership with Clay Nation, the creative brand in web3 known for their captivating multi-dimensional clay animations and on-chain collectibles.",
      "button": "Get Yours Now!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel_pog%20square.png",
      "utm": 'https://unstoppableweb.co/3IYygYH',
      "title": "Introducing the Launch of .POG",
      "subtitle": "We’ve joined forces with POG Digital, the interoperable universal gaming ecosystem created by THE WORLD POG FEDERATION™, a beloved 90's game and collectibles brand. Together, we proudly introduce .POG, a brand new domain extension that gives POG users a unique username to identity as part of their community.",
      "button": 'Get Yours Today!'
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-austin-tld.png",
      "utm": 'https://unstoppableweb.co/4cc8fCw',
      "title": ".Austin, the first city-centric web3 domain launches",
      "subtitle": "Introducing .Austin, empowering 2.4m Central Texas residents and visitors to show their love of Austin and personalize their digital identity in the heart of Texas.",
      "button": 'Get your name!'
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-pudgy-tld.png",
      "utm": 'https://unstoppableweb.co/3OHW7yS',
      "title": "Pudgy Penguins and Unstoppable Launch .PUDGY",
      "subtitle": "Huddle up! .PUDGY is here! We're excited to announce a cool new partnership with Pudgy Penguins, the widely popular Web3 brand, to introduce the first-ever NFT Community-Focused Web3 Domain TLD.",
      "button": 'Get Yours Today!'
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
