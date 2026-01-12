import React from 'react'
import { WHY_NOTHING_ITEMS } from './WhyNothing.constants'

const WhyNothing = () => {
    return (
        <section className='font-nunito bg-[#f7f2e7] pb-[70px] mb-9'>
            <div className="mx-auto max-w-335 px-[15px] min-[750px]:px-[50px]">
                <div className='max-w-[800px] mx-auto text-center max-mobile-sm:mb-6 mb-10'>
                    <p className='font-lora max-mobile-sm:text-2xl text-[32px] leading-[1.3em]'>Why Nothing Has <span className='text-[#039869]'>Worked</span></p>
                </div>

                <div className='grid max-mobile-sm:grid-cols-1 grid-cols-3 max-mobile-sm:gap-2 gap-4'>
                    {
                        WHY_NOTHING_ITEMS.map(({ id, imgUrl, desc, title }) => (
                            <div key={id} className='rounded-md bg-[#f7f7f7] overflow-hidden flex flex-col'>
                                <img src={imgUrl} alt="" className='w-full' />
                                <div className='max-mobile-sm:p-4 p-6 flex-1 flex flex-col'>

                                    <p className='text-xl font-trirong text-center'>{title}</p>

                                    <div className='rounded-md bg-[#ffe3e3] max-mobile-sm:mt-4 mt-6 py-2 px-4 flex-1'>
                                        <div className='text-base flex items-center justify-center gap-2.5'>
                                            <p className='font-semibold text-center'>Why it failed</p>
                                            <img src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839" alt="" className='size-6 shrink-0' />
                                        </div>

                                        <p className='font-bold mt-3 text-center leading-[1.3em]'>{desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='max-mobile-sm:max-w-[420px] max-w-[920px] mx-auto max-mobile-sm:mt-6'>
                    <img src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176" alt="" className='max-mobile-sm:hidden' />
                    <img src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_1.png?v=1760694176" alt="" className='max-mobile-sm:block hidden' />
                </div>

                <div className='mt-6 flex flex-col gap-4 items-center'>
                    <button className='max-mobile-sm:text-base text-lg max-mobile-sm:p-4 max-mobile-sm:w-full py-4.5 px-20 rounded bg-black font-bold text-white text-center hover:opacity-70 transition-opacity duration-200'>Try Lymphatic Drainage Risk-Free</button>
                    <div className='flex items-center justify-center gap-4'>
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" alt="" className='w-6 shrink-0'/>
                        <p className='font-bold'>60 day money-back guarantee</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyNothing