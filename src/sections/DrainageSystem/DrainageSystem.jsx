import React from 'react'
import ReactParser from 'html-react-parser'
import { DS_ITEM_1, DS_ITEM_2 } from './DrainageSystem.constants'

const DrainageSystem = () => {
    return (
        <section className='font-nunito'>
            <div className="mx-auto max-w-335 px-[15px] min-[750px]:px-[50px] max-mobile-sm:text-base text-lg">
                <div className='max-w-[800px] mx-auto text-center max-mobile-sm:mb-6 mb-10'>
                    <p className='font-lora max-mobile-sm:text-2xl text-[32px] leading-[1.3em]'>Your <span className='text-[#039869]'>Hidden</span> Drainage System</p>
                </div>

                <div className='flex gap-25 items-center max-mobile-sm:flex-col-reverse max-mobile-sm:gap-4'>
                    <div className='flex-1 space-y-2'>
                        <p className=''>{ReactParser(DS_ITEM_1.desc1)}</p>
                        <p className=''>{DS_ITEM_1.desc2}</p>
                        {
                            DS_ITEM_1.group1.map((item, index) => (
                                <div key={index} className='flex items-center gap-3'>
                                    <img src="https://trysculptique.com/cdn/shop/files/check-mark_17013456_2_1.png?v=1760702838" alt="" className='size-5 shrink-0' />
                                    <p className='text-[#0c7c00] font-semibold'>{item}</p>
                                </div>
                            ))
                        }
                        <p className='py-2 px-4 rounded-lg bg-[#ffe3e3] max-mobile-sm:my-3 my-6'>{DS_ITEM_1.desc3}</p>
                        {
                            DS_ITEM_1.group2.map((item, index) => (
                                <div key={index} className='flex items-center gap-3'>
                                    <img src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839" alt="" className='size-5 shrink-0' />
                                    <p className='text-[#a60003] font-semibold'>{item}</p>
                                </div>
                            ))
                        }
                        <p>{DS_ITEM_1.desc4}</p>
                    </div>

                    <div className='flex-1'>
                        <img src={DS_ITEM_1.imgUrl} alt="" className='max-mobile-sm:hidden' />
                        <img src={DS_ITEM_1.imgMobileUrl} alt="" className='max-mobile-sm:block hidden' />
                    </div>
                </div>

                <div className='flex gap-25 items-center max-mobile-sm:flex-col max-mobile-sm:gap-4 max-mobile-sm:pt-8 max-mobile-sm:pb-6 py-14'>
                    <div className='flex-1'>
                        <img src={DS_ITEM_2.imgUrl} alt="" className='max-mobile-sm:hidden' />
                        <img src={DS_ITEM_2.imgMobileUrl} alt="" className='max-mobile-sm:block hidden' />
                    </div>

                    <div className='flex-1 space-y-2'>
                        <p className=''>{ReactParser(DS_ITEM_2.desc1)}</p>
                        <p className=''>{DS_ITEM_2.desc2}</p>

                        <div className='py-2 px-4 rounded-lg bg-[#ffe3e3] max-mobile-sm:my-3 my-6'>
                        <p>{DS_ITEM_2.desc3}</p>
                        {
                            DS_ITEM_2.group1.map((item, index) => (
                                <div key={index} className='flex items-center gap-3'>
                                    <img src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839" alt="" className='size-5 shrink-0' />
                                    <p className='text-[#a60003] font-semibold'>{item}</p>
                                </div>
                            ))
                        }
                        </div>
                        <p>{ReactParser(DS_ITEM_2.desc4)}</p>
                        <p>{DS_ITEM_2.desc5}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DrainageSystem