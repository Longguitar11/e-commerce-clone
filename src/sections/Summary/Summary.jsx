import React from 'react'

const Summary = () => {
    return (
        <section className='font-nunito max-mobile-sm:py-8 py-14 bg-[#f3eee0]'>
            <div className="page-width">
                <div className='flex items-center gap-16 max-mobile-sm:flex-col max-mobile-sm:gap-0'>
                    <div className='flex-1'>
                        <div className='[&>img]:w-full'>
                            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694" alt="" className='max-mobile-sm:hidden max-w-[350px]' />
                            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_1.png?v=1752480694" alt="" className='mobile-sm:hidden max-w-[250px] mx-auto' />
                        </div>

                        <p className='text-[32px] max-mobile-sm:text-2xl leading-[1.3em] font-lora my-4'>Stop Masking Symptoms. Start Restoring Root Cause.</p>

                        <div className='text-lg leading-[1.3em] space-y-3'>
                            <p>You deserve to feel like yourself again. To wake up without puffiness. To see your ankles. To look in the mirror and recognize the vibrant woman staring back. To have energy for the people you love.</p>
                            <p>You deserve a solution that actually works. Not temporary relief. Not symptom masking. Complete lymphatic restoration.</p>
                        </div>

                        <img src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928" alt="" className='mobile-sm:hidden w-full mt-3' />

                        <div className='mt-9 space-y-4'>
                            <a href="https://pay.trysculptique.com/lymphatic/checkout" target='_blank' className='mx-auto max-mobile-sm:w-full w-fit block text-center no-underline! text-white! py-4.5 px-20 max-mobile-sm:p-4 max-mobile-sm:text-base text-lg leading-[1.3em] bg-black rounded hover:opacity-60 transition-colors duration-200'>Try Lymphatic Drainage Risk-Free</a>
                            <div className='flex gap-4 items-center justify-center text-base'>
                                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" alt="" className='w-6' />
                                <p>60-Day Money-Back Guarantee</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 max-mobile-sm:hidden">
                        <img src="https://trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928" alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary