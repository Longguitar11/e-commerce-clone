import React from 'react'

const Expert = () => {
    return (
        <section className='font-nunito max-mobile-sm:py-8 py-14 max-mobile-sm:bg-[#f7f7f7]'>
            <div className="page-width">
                <div className='rounded-xl bg-[#f7f7f7] overflow-hidden max-mobile-sm:flex-col-reverse max-mobile-sm:bg-white flex'>
                    <div className="flex-1">
                        <div className='max-mobile-sm:p-4 p-8'>
                            <p className='text-base text-[#737373]'>July 4th, 2025</p>
                            <p className='font-lora max-mobile-sm:text-2xl text-[32px] my-4 leading-[1.3em]'>Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic</p>

                            <div className='text-lg leading-[1.3em] space-y-3'>
                                <p>“Your nutrition plays a powerful role in your appearance. If your body is missing key vitamins and nutrients, it can’t process fat and upkeep healthy connective tissue, which is why unprocessed fat flows up and starts pushing up against your skin, forming bumps you know as cellulite.</p>
                                <p>SmoothSkin by Sculptique™ contains ingredients that are scientifically proven to enhance microcirculation, boost lymphatic drainage, and reduce inflammation, which restores your tissue and breaks down the fat cells in your skin.”</p>
                            </div>

                            <div className='mt-6 space-y-4'>
                                <a href="https://pay.trysculptique.com/lymphatic/checkout" target='_blank' className='block text-center no-underline! text-white! py-4.5 px-20 max-mobile-sm:p-4 max-mobile-sm:text-base text-lg leading-[1.3em] bg-black rounded hover:opacity-60 transition-colors duration-200'>Try Lymphatic Drainage Risk-Free</a>
                                <div className='flex gap-4 items-center justify-center text-base'>
                                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" alt="" className='w-6' />
                                    <p>60-Day Money-Back Guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <img src="https://trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213" className='object-cover w-full h-full rounded-xl' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expert