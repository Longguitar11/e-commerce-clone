import React, { useRef, useState, useEffect } from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { CUSTOMER_REVIEWS, REVIEW_ITEMS } from './Reviews.constants'
import classNames from 'classnames'
import Stars from '../../components/common/Stars'
import { FiUser } from 'react-icons/fi'
import { TiTick } from 'react-icons/ti'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { MdFirstPage, MdLastPage } from 'react-icons/md'
import { Button, StarRating } from './Reviews.components'
import { LuUpload } from 'react-icons/lu'
import { BiSolidTrashAlt } from 'react-icons/bi'

const REVIEWS_PER_PAGE = 5

const Reviews = () => {
    const [isShowWriteReview, setIsShowWriteReview] = useState(false)
    const [rating, setRating] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [leftCharacterCount, setLeftCharacterCount] = useState(5000)
    const [reviewContent, setReviewContent] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')

    const [medias, setMedias] = useState([])
    const mediaRef = useRef(null)
    const mediasRef = useRef(medias)

    useEffect(() => {
        mediasRef.current = medias
    }, [medias])

    useEffect(() => {
        return () => {
            // revoke object URLs on unmount
            mediasRef.current.forEach(m => {
                try { URL.revokeObjectURL(m.url) } catch (e) { console.log(e) }
            })
        }
    }, [])

    const totalPages = Math.ceil(CUSTOMER_REVIEWS.length / REVIEWS_PER_PAGE)

    const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE
    const endIndex = startIndex + REVIEWS_PER_PAGE

    const currentReviews = CUSTOMER_REVIEWS.slice(startIndex, endIndex)

    const handleReviewContent = (value) => {
        if (value.length <= 5000) {
            setLeftCharacterCount(5000 - value.length)
            setReviewContent(value)
        }
    }

    const handleMedia = (files) => {
        if (!files) return
        const list = Array.from(files).map(f => ({ file: f, url: URL.createObjectURL(f) }))
        setMedias(prev => [...prev, ...list])
    }

    const handleDeleteMedia = (index) => {
        mediasRef.current.splice(index, 1)
        setMedias([...mediasRef.current])
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!rating || !displayName || !email || !reviewContent) return

        console.log({ rating, displayName, email, reviewContent, medias })

        setRating(0)
        setDisplayName('')
        setEmail('')
        setReviewContent('')
        setMedias([])

        setIsShowWriteReview(false)
    }

    return (
        <section className='font-nunito max-mobile-sm:py-8 py-14'>
            <div className="mx-auto max-w-335 px-[15px] min-[750px]:px-[50px]">
                <div className='max-w-[800px] mx-auto space-y-4 text-center [&>p]:leading-[1.3em]'>
                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211" alt="" className='max-w-[200px] mx-auto' />
                    <p className='max-mobile-sm:text-2xl text-[32px] font-lora'>Real Women, Real Results: 93,000+ Transformations</p>
                    <p className='max-mobile-sm:text-base text-lg'>All reviews verified from actual paying customers</p>
                </div>

                <div className='pt-10 px-4'>
                    <div className='font-montserrat'>
                        <p className='text-[150%] leading-[1.4] font-trirong text-center mb-3 laptop:mb-6'>Customer Reviews</p>

                        <div className='flex justify-center pb-6 flex-col laptop:flex-row max-laptop:items-center max-laptop:gap-6'>
                            <div className='text-black/75 max-[750px]:text-[15px] w-full laptop:w-[30%] flex'>
                                <div className="m-auto">

                                    <div className='flex items-center gap-2'>
                                        <div className='flex gap-1 items-center [&>svg]:fill-salmon'>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalfAlt />
                                        </div>

                                        <p className=''>4.67 out of 5</p>
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <p>Based on 110 reviews</p>
                                        <img src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg" alt="" className='size-[17px] shrink-0' />
                                    </div>
                                </div>
                            </div>

                            <div className='laptop:border-l border-[#1084741a] w-full laptop:w-[40%] flex'>
                                <div className='m-auto space-y-2.5 [&>div]:h-[14px]'>
                                    {
                                        REVIEW_ITEMS.map(({ stars, reviewCount, bar }) => (
                                            <div key={stars} className='flex items-center cursor-pointer hover:opacity-60 transition-opacity durantion-200'>
                                                <Stars className='[&>svg]:text-[13px]' stars={stars} />

                                                {/* BAR */}
                                                <div className='mobile-sm:w-[140px] w-[126px] mobile-sm:mx-6 mx-4 h-full relative'>
                                                    <span className='bg-[#e0e0e080] absolute inset-0 w-full h-full'></span>
                                                    <div className={`absolute left-0 inset-y-0 bg-salmon h-full`} style={{ width: bar }}></div>
                                                </div>

                                                <p className='text-[#7b7b7b] text-[80%]'>{reviewCount}</p>
                                            </div>
                                        )
                                        )
                                    }

                                </div>
                            </div>

                            <div className='w-full laptop:w-[30%] laptop:border-l border-[#1084741a] flex'>
                                <Button
                                    className={'md:max-w-[240px] m-auto'}
                                    onClick={() => setIsShowWriteReview(pre => !pre)}
                                >
                                    {isShowWriteReview ? 'Cancel review' : 'Write a review'}
                                </Button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className={classNames('overflow-hidden max-w-[600px] mx-auto px-4 border-t border-[#1084741a] text-black/75 transition-all duration-500 ease-out flex flex-col items-center',
                            isShowWriteReview ? 'translate-y-0 opacity-100 max-h-[1500px] py-6' : '-translate-y-6 opacity-0 max-h-0')}>
                            <p className='text-[150%] font-bold mb-4'>Write a review</p>

                            <div className='space-y-2 mb-6'>
                                <p className='text-center'>Rating</p>
                                <StarRating value={rating} onChange={setRating} />
                            </div>

                            <div className='space-y-2 mb-6 w-full'>
                                <label className='text-center block' htmlFor='review-content'>Review content<span className='text-[#7b7b7b] text-[80%] ml-1'>({leftCharacterCount})</span></label>
                                <textarea value={reviewContent} maxLength={5000} onChange={(e) => handleReviewContent(e.target.value)} rows="5" name="review-content" id="review-content" placeholder='Start writing here...' className='w-full py-2 px-4 border border-[#e4e4e4] text-sm outline-none focus:border-salmon'></textarea>
                            </div>

                            <div className='flex flex-col items-center gap-2 mb-6'>
                                <label htmlFor="media">Picture/Video (optional)</label>

                                <input ref={mediaRef} type="file" multiple accept='image/gif,image/jpeg,image/jpg,image/png,image/webp' onChange={(e) => handleMedia(e.target.files)} name="media" id="media" className='hidden' />

                                <div className='flex gap-2.5 items-center'>
                                    <div className='size-[128px] border border-[#e4e4e4] flex mx-auto hover:opacity-60 transition-opacity durantion-200 cursor-pointer' onClick={() => mediaRef.current.click()}>
                                        <LuUpload className='text-[#7b7b7b] text-[48px] m-auto' />
                                    </div>

                                    {
                                        medias && medias.map((media, index) => (
                                            <div key={index} className='relative border border-[#e4e4e4]'>
                                                <img src={media.url} alt={media.file?.name || ''} className='size-[128px] object-contain' />

                                                <div onClick={() => handleDeleteMedia(index)} className='absolute top-[5px] right-[5px] size-6 flex py-0.5 px-1 bg-white rounded-full shadow cursor-pointer hover:bg-salmon hover:[&>svg]:text-white transition-colors duration-200'>
                                                    <BiSolidTrashAlt className='m-auto' />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className='flex flex-col items-center mb-6 w-full'>
                                <label htmlFor="display-name">Display name (displayed publicly like
                                    <select className='font-arial text-salmon text-sm cursor-pointer hover:opacity-80 transition-opacaty durantion-200' name="display-name-sample" id="display-name-sample" defaultValue={'John Smith'}>
                                        <option value="John Smith">John Smith</option>
                                        <option value="John S.">John S.</option>
                                        <option value="John">John</option>
                                        <option value="J.S.">J.S.</option>
                                        <option value="Anonymous">Anonymous</option>
                                    </select>
                                    )</label>

                                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} type="text" name="display-name" id="display-name" placeholder='Dislay name' className='border border-[#e4e4e4] py-2 px-4 mt-2 text-sm w-full outline-none focus:border-salmon' />
                            </div>

                            <div className='flex flex-col items-center mb-6 w-full'>
                                <label htmlFor="email">Email address</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Your email address' className='border border-[#e4e4e4] py-2 px-4 mt-2 text-sm w-full outline-none focus:border-salmon' />
                            </div>

                            <p className='text-black font-nunito text-center mb-6'>How we use your data: We'll only contact you about the review you left, and only if necessary.
                                By submitting your review, you agree to Judge.me's <a href="https://judge.me/terms" target='_blank'>terms</a>, <a href="https://judge.me/privacy" target='_blank'>privacy</a> and <a href="https://judge.me/content-policy" target='_blank'>content</a> policies.</p>
                        
                            <div className='flex max-[500px]:flex-col max-[500px]:gap-2 gap-4'>
                                <Button onClick={() => setIsShowWriteReview(false)} className={'text-salmon! bg-white border-salmon border-2'}>Cancel review</Button>
                                <Button type={'submit'}>Submit review</Button>
                            </div>
                        </form>
                    </div>


                    <div className='border-t border-[#1084741a] py-8'>
                        <img src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format" alt="" className='mx-auto size-20' />

                        <p className='text-center text-[#4c8eda] font-arial text-xs font-bold'>100.0</p>
                    </div>

                    <div className='border-t border-[#1084741a] py-2'>
                        <select name="review-sort" id="" defaultValue={'most-recent'} className='py-2.5 text-salmon text-sm font-arial border-0 cursor-pointer hover:opacity-80 transition-opacity duration-200'>
                            <option value="most-recent">Most Recent</option>
                            <option value="highest-rating">Highest Rating</option>
                            <option value="lowest-rating">Lowest Rating</option>
                            <option value="only-pictures">Only Pictures</option>
                            <option value="pictures-first">Pictures First</option>
                            <option value="videos-first">Videos First</option>
                            <option value="most-helpful">Most Helpful</option>
                        </select>
                    </div>

                    <div className='font-montserrat'>
                        {
                            currentReviews.map(({ id, name, stars, createdAt, content }) => (
                                <div key={id} className='py-4 space-y-2 border-t border-[#1084741a]'>
                                    <div className='flex items-center justify-between'>
                                        <Stars stars={stars} />

                                        <p className='text-[#7b7b7b] text-[80%]'>{createdAt}</p>
                                    </div>

                                    <div className='flex gap-2 items-start'>
                                        <div className='size-9 shrink-0 bg-[#e0e0e080] relative flex'>
                                            <FiUser className='size-6 text-salmon m-auto' />

                                            <div className='absolute right-0 bottom-0 size-3 shrink-0 bg-salmon flex'>
                                                <TiTick className='fill-white m-auto size-3' />
                                            </div>
                                        </div>

                                        <div className='flex gap-2 items-center'>
                                            <p className='text-salmon max-[750px]:text-[15px]'>{name || 'Anonymous'}</p>
                                            <p className='bg-salmon py-0.5 px-1.5 text-white text-xs leading-none'>
                                                Verified
                                            </p>
                                        </div>
                                    </div>

                                    <p className='font-nunito'>{content}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex justify-center border-t border-[#1084741a] py-4 [&>button]:hover:opacity-60 [&>button]:transition-opacity [&>button]:durantion-200 [&>button]:text-salmon'>

                        <button
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                            className={classNames('p-2 text-lg', currentPage === 1 && 'pointer-events-none hidden')}
                        >
                            <MdFirstPage />
                        </button>

                        {/* PREV */}
                        <button
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className={classNames('p-2', currentPage === 1 && 'pointer-events-none hidden')}
                        >
                            <GrFormPrevious className='' />
                        </button>

                        {/* PAGE NUMBERS */}
                        {Array.from({ length: totalPages }).map((_, index) => {
                            const page = index + 1
                            return (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={classNames('font-montserrat px-2 py-1',
                                        currentPage === page && 'text-[150%] text-[#7b7b7b]! font-bold pointer-events-none',)}
                                >
                                    {page}
                                </button>
                            )
                        })}

                        {/* NEXT */}
                        <button
                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={classNames('p-2', currentPage === totalPages && 'pointer-events-none hidden')}
                        >
                            <GrFormNext />
                        </button>

                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                            className={classNames('p-2 text-lg', currentPage === totalPages && 'pointer-events-none hidden')}
                        >
                            <MdLastPage />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Reviews