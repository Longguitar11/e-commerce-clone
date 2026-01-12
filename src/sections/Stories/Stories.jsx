import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import classNames from 'classnames';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { STORIE_ITEMS } from './Stories.constants';

const Stories = () => {
    const videosRef = useRef({})
    const [playingId, setPlayingId] = useState(null)
    const swiperRef = useRef(null)
    const [isSwiperInitialized, setIsSwiperInitialized] = useState(false)

    // Pause all videos on unmount
    useEffect(() => {
        return () => {
            Object.values(videosRef.current).forEach(v => { try { v.pause() } catch (e) { } })
        }
    }, [])

    const togglePlay = (id) => {
        const video = videosRef.current[id]
        if (!video) return

        if (video.paused) {
            // pause others
            Object.entries(videosRef.current).forEach(([key, v]) => {
                if (key !== String(id) && v && !v.paused) v.pause()
            })

            const playPromise = video.play()
            if (playPromise && typeof playPromise.then === 'function') {
                playPromise.then(() => setPlayingId(id)).catch(() => { })
            } else {
                setPlayingId(id)
            }
        } else {
            video.pause()
            setPlayingId(null)
        }
    }

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper

        if (isSwiperInitialized) return
        setIsSwiperInitialized(true)
    }

    return (
        <section className='font-nunito max-mobile-sm:py-8 py-14 bg-[#f3eee0]'>
            <div className="page-width">
                <div className='mx-auto max-w-[800px] mb-6'>
                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383" alt="" className='max-w-[300px] mx-auto mb-4 block' />
                    <p className='text-[32px] max-mobile-sm:text-2xl leading-[1.3em] font-lora text-center'>See The Stories of Sculptique™ Women Firsthand</p>
                </div>

                <div>
                    <Swiper
                        modules={[Scrollbar]}
                        scrollbar={{
                            el: '.swiper-scrollbar',
                            draggable: true,
                        }}
                        slidesPerView={1}
                        onSwiper={(swiper) => handleSwiper(swiper)}
                        breakpoints={{
                            678: {
                                slidesPerView: 4,
                                spaceBetween: 16
                            }
                        }}
                    >
                        {STORIE_ITEMS.map(({ id, src }) => (
                            <SwiperSlide
                                key={id}
                                className='relative cursor-pointer'
                                onClick={() => togglePlay(id)}
                            >
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519"
                                    alt="play"
                                    role="button"
                                    draggable="false"
                                    className={classNames("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8", playingId === id && 'hidden')}
                                />

                                <video
                                    width="100%"
                                    height="100%"
                                    className='aspect-9/16 rounded h-full object-cover overflow-hidden'
                                    ref={(el) => {
                                        videosRef.current[id] = el
                                        if (el) {
                                            el.onended = () => { setPlayingId(prev => prev === id ? null : prev) }
                                        }
                                    }}
                                    playsInline
                                >
                                    <source src={src} type="video/mp4" />
                                </video>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='mt-4 flex items-center justify-between gap-4'>
                        <div className='swiper-scrollbar overflow-hidden relative! left-0! h-[4px]!'>

                        </div>

                        <div className='flex items-center gap-3'>

                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className=""
                                disabled={!isSwiperInitialized}
                            >
                                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" alt="" className='max-w-8' />
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className=""
                                disabled={!isSwiperInitialized}
                            >
                                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" alt="" className='rotate-180 max-w-8' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-8 space-y-4'>
                    <a href="https://pay.trysculptique.com/lymphatic/checkout" target='_blank' className='mx-auto max-mobile-sm:w-full w-fit block text-center no-underline! text-white! py-4.5 px-20 max-mobile-sm:p-4 max-mobile-sm:text-base text-lg leading-[1.3em] bg-black rounded hover:opacity-60 transition-colors duration-200'>Try Lymphatic Drainage Risk-Free</a>
                    <div className='flex gap-4 items-center justify-center text-base'>
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" alt="" className='w-6' />
                        <p>60-Day Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stories