import React, { useState } from 'react'
import TextIcon from '../../components/common/TextIcon'
import classNames from 'classnames'
import Modal from '../../components/common/Modal';
import { LEARN_MORE_MODAL_TITLE } from './Hero.constants';
import { DoctorsList, ModalItems, MoreDetails, Review, Sale } from './Hero.components';
import { BiLinkExternal } from 'react-icons/bi';

const Hero = () => {
    const [isHideReviews, setIsHideReviews] = useState(false);
    const [isShowLearnMore, setIsShowLearnMore] = useState(false);

    return (
        <>
            <section className='py-8'>
                <div className="mx-auto max-w-335 px-[15px] min-[750px]:px-[50px]">
                    <div className='flex gap-16 max-[678px]:flex-col'>
                        <div className='space-y-4 flex-1'>
                            <div className='relative'>
                                <img src='https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674' alt='' className='w-full rounded-lg' />
                                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224" alt="" className='absolute top-4 right-4 max-w-20 md:max-w-30' />
                                <div className='absolute px-6 py-2 bottom-8 left-1/2 -translate-x-1/2 bg-[#ffffffd9] rounded-3xl text-center max-w-[290px] flex items-center gap-2 border border-black'>
                                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629" alt="" className='w-6 shrink-0 object-cover aspect-[1]' />
                                    <p className='font-montserrat text-[14px] opacity-75'>Nutritional Information</p>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <img src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684" alt="" className='rounded-lg' />
                                </div>

                                <div>
                                    <img src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684" alt="" className='rounded-lg' />
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-4'>
                                <div>
                                    <img src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685" alt="" className='rounded-lg' />
                                </div>

                                <div>
                                    <img src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685" alt="" className='rounded-lg' />
                                </div>

                                <div>
                                    <img src="https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685" alt="" className='rounded-lg' />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <img src="https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216" alt="" className='rounded-lg' />
                                </div>

                                <div>
                                    <img src="https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216" alt="" className='rounded-lg' />
                                </div>
                            </div>
                        </div>

                        <div className='flex-1 font-nunito space-y-4'>
                            <div className='flex items-center gap-4'>
                                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359" alt="" className='max-mobile-sm:w-15 w-[100px]' />
                                <p className='max-mobile-sm:text-[12px]'>4.8/5 Excellent | Based on 2381 Reviews</p>
                            </div>

                            <p className='font-lora max-mobile-sm:text-[24px] text-[28px] leading-[1.4em]'>New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™</p>

                            <TextIcon text={'Join over 93 Thousand who say - it WORKS!'} urlIcon={'https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413'} />
                            <TextIcon text={'Restores your body’s natural 24-hour lymphatic cycle'} urlIcon={'https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910'} />
                            <TextIcon text={'Helps reduce fluid retention and the appearance of puffiness and bloating'} urlIcon={'https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413'} />
                            <TextIcon text={'Helps fall asleep faster, stay asleep longer and wake up energized'} urlIcon={'https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414'} />
                            <TextIcon text={'Eliminates joint stiffness, pain, morning creakiness and feel more grounded'} urlIcon={'https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414'} />
                            <TextIcon text={'Boosts energy, mental clarity and emotional balance'} urlIcon={'https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413'} />

                            <div className={classNames('text-dark-gray flex gap-3 transition-all duration-300 ease-in-out', isHideReviews
                                ? 'opacity-0 -translate-x-6 pointer-events-none'
                                : 'opacity-100 translate-x-0')}>
                                <div className='flex gap-[10px] items-center pt-2 pl-2 pb-2.5'>
                                    <div className='flex justify-center items-center gap-1 [&>span,svg]:h-10'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="35" viewBox="0 0 17 35" fill="#212121">
                                                <path d="M2.60396 10.0782C2.63019 12.7275 5.0681 14.8472 5.0681 14.8472C5.0681 14.8472 7.46457 12.6717 7.43993 10.0222C7.41325 7.3697 4.97398 5.25178 4.97398 5.25178C4.97398 5.25178 2.57932 7.42863 2.60396 10.0782ZM1.34556 19.1722C2.78927 21.3977 5.99278 21.9007 5.99278 21.9007C5.99278 21.9007 6.85625 18.7951 5.41254 16.5696C3.96883 14.3441 0.763495 13.8397 0.763495 13.8397C0.763495 13.8397 -0.0997442 16.9469 1.34556 19.1722ZM3.82901 27.3622C6.16621 28.6381 9.23028 27.5709 9.23028 27.5709C9.23028 27.5709 8.50337 24.4335 6.16618 23.1576C3.82898 21.8817 0.764911 22.9489 0.764911 22.9489C0.764911 22.9489 1.49182 26.0862 3.82901 27.3622ZM10.5368 33.3638C13.0903 34.1327 15.868 32.4611 15.868 32.4611C15.868 32.4611 14.504 29.5425 11.9502 28.772C9.39665 28.0031 6.62082 29.6761 6.62082 29.6761C6.62082 29.6761 7.98323 32.5949 10.5368 33.3638ZM9.02056 3.29033C7.3448 5.35644 7.8659 8.53241 7.8659 8.53241C7.8659 8.53241 11.1079 8.36114 12.7836 6.29503C14.4594 4.22891 13.9381 1.05136 13.9381 1.05136C13.9381 1.05136 10.6963 1.22421 9.02056 3.29033Z" stroke="#212121" stroke-linecap="round"></path>
                                            </svg>
                                        </span>

                                        <p className='font-lora font-medium text-center '>Clinicians'
                                            <br />
                                            Choice</p>

                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="35" viewBox="0 0 17 35" fill="#212121">
                                                <path d="M14.1756 10.0782C14.1494 12.7275 11.7114 14.8472 11.7114 14.8472C11.7114 14.8472 9.31497 12.6717 9.33961 10.0222C9.36629 7.3697 11.8056 5.25178 11.8056 5.25178C11.8056 5.25178 14.2002 7.42863 14.1756 10.0782ZM15.434 19.1722C13.9903 21.3977 10.7868 21.9007 10.7868 21.9007C10.7868 21.9007 9.92329 18.7951 11.367 16.5696C12.8107 14.3441 16.016 13.8397 16.016 13.8397C16.016 13.8397 16.8793 16.9469 15.434 19.1722ZM12.9505 27.3622C10.6133 28.6381 7.54926 27.5709 7.54926 27.5709C7.54926 27.5709 8.27617 24.4335 10.6134 23.1576C12.9506 21.8817 16.0146 22.9489 16.0146 22.9489C16.0146 22.9489 15.2877 26.0862 12.9505 27.3622ZM6.24277 33.3638C3.68923 34.1327 0.911591 32.4611 0.911591 32.4611C0.911591 32.4611 2.27559 29.5425 4.82935 28.772C7.38289 28.0031 10.1587 29.6761 10.1587 29.6761C10.1587 29.6761 8.79631 32.5949 6.24277 33.3638ZM7.75898 3.29033C9.43474 5.35644 8.91365 8.53241 8.91365 8.53241C8.91365 8.53241 5.67166 8.36114 3.9959 6.29503C2.32014 4.22891 2.84146 1.05136 2.84146 1.05136C2.84146 1.05136 6.08322 1.22421 7.75898 3.29033Z" stroke="#212121" stroke-linecap="round"></path>
                                            </svg>
                                        </span>
                                    </div>

                                    <div className='font-opensans space-y-[6px] text-[13px]'>

                                        <p className=''><span className='font-semibold'>336 clinicians</span> share this on <span className='italic'>FrontrowMD</span> <br /> without compensation. <button className='underline underline-offset-4' onClick={(() => setIsShowLearnMore(true))}>Learn more</button></p>

                                        <div className='flex gap-[6px] items-center'>
                                            <div className='flex'>
                                                <img src="https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0" alt="Dr. Kimberly Rogers, MD" className='rounded-full w-[17.6px] object-fit bg-[#eee] z-0 border-2 border-white' />
                                                <img src="https://assets.app.thefrontrowhealth.com/yulyi33mil8glzv4b7fhzs5ipnz2" alt="Deerbrook Family Clinic" className='rounded-full w-[17.6px] object-fit bg-[#eee] z-1 border-2 border-white -ml-[5px]' />
                                                <img src="https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a" alt="Dr. Green" className='rounded-full w-[17.6px] object-fit bg-[#eee] z-2 border-2 border-white -ml-[5px]' />
                                            </div>

                                            <button className='hover:underline hover:underline-offset-4 font-semibold'>
                                                <p>Read their reviews</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <button className='p-1.5 rounded-full bg-[#E0E0E0] h-fit mt-[5px]' onClick={() => setIsHideReviews(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <path d="M1 5.5L0.5 5L2.5 3L0.5 1L1 0.5L3 2.5L5 0.5L5.5 1L3.5 3L5.5 5L5 5.5L3 3.5L1 5.5Z" fill="#212121"></path>
                                    </svg>
                                </button>
                            </div>

                            <Sale />

                            <Review />

                            <MoreDetails />
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                isOpen={isShowLearnMore}
                title={LEARN_MORE_MODAL_TITLE}
                onClose={() => setIsShowLearnMore(false)}
            >
                <div className="overflow-y-auto max-h-[553px] custom-scroll font-sofiapro">
                    <div className='py-4'>
                        <ModalItems />
                    </div>

                    <div className='bg-[#FAFAFA]'>

                        <div className='pt-8 px-6'>
                            <p className='text-[18px] text-dark-gray font-medium leading-7 mb-1.5'>Clinicians who shared this product</p>

                            <p className='text-[#424242]'>For the complete list, <span className='underline'>click here</span>. Numbers below indicate how many clinicians collaborate to share products on a single page at a medical practice.</p>

                            <DoctorsList />

                            <div className='flex justify-center items-center gap-2 cursor-pointer my-6'>
                                <p className='text-dark-gray font-medium'>See the full list of clinicians and learn more</p>
                                <BiLinkExternal />
                            </div>

                        </div>
                        <div className='rounded-xl bg-[#f5f5f5] py-3 px-4 mx-2 mb-4'>
                            <p className='text-center text-[#757575] italic text-[12px]'>Please consult your own medical provider before buying health products online, as neither FrontrowMD nor our clinician partners are providing medical advice.</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Hero