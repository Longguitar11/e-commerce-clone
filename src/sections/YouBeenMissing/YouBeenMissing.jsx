import React from 'react'

const YouBeenMissing = () => {
    return (
        <section className=''>
            <div className="mx-auto max-w-335 px-[15px] min-[750px]:px-[50px]">
                <div className='max-w-[800px] mx-auto text-center mb-4'>
                    <p className='font-lora max-mobile-sm:text-2xl text-[32px] leading-[1.3em]'>The Connection <span className='text-[#039869]'>You've Been Missing</span></p>
                </div>

                <div className='max-mobile-sm:max-w-[420px] max-w-[920px] mx-auto'>
                    <img src="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771" alt="" className='max-mobile-sm:hidden' />
                    <img src="https://trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770" alt="" className='max-mobile-sm:block hidden' />
                </div>

                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549" alt="" className='max-mobile-sm:w-8.5 w-12 mx-auto max-mobile-sm:my-4 my-6' />
            </div>
        </section>
    )
}

export default YouBeenMissing