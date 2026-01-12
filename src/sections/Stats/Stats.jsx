import React from 'react'

const Stats = () => {
    return (
        <section className='font-nunito max-mobile-sm:py-8 py-14'>
            <div className="page-width">
                <div className='flex items-center'>
                    <div className='max-mobile-sm:px-4 px-8 w-full max-mobile-sm:text-center'>
                        <p className='text-[32px] max-mobile-sm:text-2xl leading-[1.3em] font-lora mb-4'>We’re On A Mission To Help 100,000,000 Women Visibly, Naturally Get Rid Of Bloating…And Feel Like Themselves Again</p>
                        <p className='text-lg mb-3'>Here's where we're at right now:</p>

                        <div>
                            <img src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777" alt="" className='mobile-sm:hidden w-full mb-2' />
                            <img src="https://trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458" alt="" className='max-mobile-sm:hidden w-full' />
                            <img src="https://trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458" alt="" className='mobile-sm:hidden w-full' />
                        </div>
                    </div>

                    <div className='max-mobile-sm:hidden w-[70%]'>
                        <img src="https://trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777" alt="" className='object-cover w-full h-full overflow-hidden rounded-xl' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats