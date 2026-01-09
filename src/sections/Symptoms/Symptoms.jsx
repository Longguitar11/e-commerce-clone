import React from 'react'
import { SYMPTOMS_ITEMS } from './Symptoms.constants'

const Symptoms = () => {
    return (
        <section className='pt-14 font-nunito'>
            <div className="mx-auto max-w-335 px-[15px] min-[750px]:px-[50px]">
                <div className='max-w-[800px] mx-auto space-y-4 text-center'>
                    <p className='font-lora max-mobile-sm:text-2xl text-[32px] leading-[1.3em]'>Why Your <span className='text-[#039869]'>Bloating, Brain Fog & Swollen Legs</span> Are Actually Connected</p>
                    <p className='max-mobile-sm:text-base text-lg leading-[1.3em]'>If you're experiencing more than one of these symptoms, your body is trying to tell you something:</p>
                </div>

                <div className='mt-10 grid max-mobile-sm:grid-cols-1 grid-cols-5 max-mobile-sm:gap-2 gap-4 max-mobile-sm:mb-6'>
                    {
                        SYMPTOMS_ITEMS.map(({ id, imgUrl, desc }) => (
                            <div key={id} className='flex max-mobile-sm:flex-row flex-col gap-2 rounded-md overflow-hidden'>
                                <div className='max-mobile-sm:flex-1'>
                                    <img src={imgUrl} alt="symptoms" className='w-full min-h-[150px]' />
                                </div>
                                <div className='text-center bg-[#f7f7f7] p-4 flex-1 max-mobile-sm:flex min-h-[150px]'>
                                    <p className='max-mobile-sm:m-auto'>{desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='max-mobile-sm:max-w-[420px] max-w-[920px] mx-auto'>
                    <img src="https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771" alt="" className='max-mobile-sm:hidden' />
                    <img src="https://trysculptique.com/cdn/shop/files/Frame_1000003583.png?v=1760690769" alt="" className='max-mobile-sm:block hidden' />
                </div>

                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549" alt="" className='max-mobile-sm:w-8.5 w-12 mx-auto max-mobile-sm:4 my-6' />
            </div>
        </section>
    )
}

export default Symptoms