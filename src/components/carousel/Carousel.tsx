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
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-tball.png",
      "utm": "https://get.unstoppabledomains.com/tball/",
      "title": "Introducing .TBALL, our first meme coin branded TLD!",
      "subtitle": "We've partnered with Tetherball, a female-founded meme coin to launch .TBALL. Get in the game with a new .TBALL domain.",
      "button": "Get a .TBALL!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-ubu.png",
      "utm": "https://get.unstoppabledomains.com/ubu/",
      "title": ".Ubu: The First Onchain TLD in Africa Launches",
      "subtitle": "In partnership with Africarare, an AI-powered mixed-reality environment, we've launched ,Ubu domains. Embody the spirit of Ubuntu—an African philosophy centered on community and interconnectedness.",
      "button": "Unite & Thrive with .Ubu!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-kryptic.png",
      "utm": "https://kryptic.com/domains",
      "title": "Crack The Code With .Kryptic",
      "subtitle": "We've teamed up with Kryptic, a quantum-immune wallet solution, to launch .kryptic domains: Enabling simplified crypto transactions and personalized identity.",
      "button": "Get a .Kryptic!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-cryptocom-drop.png",
      "utm": "https://crypto.com/nft/drops-event/c14edda7cb07d48fb9a36015d31057da?tab=shop",
      "title": "Premium Onchain Domains at Special Prices",
      "subtitle": "We've collaborated with Crypto.com to drop 200 never-before-released domains. For 30 days only, enjoy special prices on domains like .crypto, x.x, .bitcoin and more.",
      "button": "Shop the Drop!"
    },
    {
      "image": "https://storage.googleapis.com/unstoppable-client-assets-staging/campaigns/Unstoppable%20Marketplace/carousel-namemaxi.png",
      "utm": "https://www.namemaxi.com/",
      "title": "Name Maxi Integrates Unstoppable Marketplace for Tokenized .Com Domains",
      "subtitle": "As the first partner platform to offer tokenized .com domains from UD, Name Maxi users can effortlessly browse the “Unstoppable” sub-category to discover a wide range of tokenized .com domains.",
      "button": "Give it a try!"
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
