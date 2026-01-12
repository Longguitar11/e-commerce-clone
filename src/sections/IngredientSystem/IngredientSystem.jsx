import React, { useState } from 'react'
import ReactParser from 'html-react-parser'
import { INGREDIENT_ITEMS } from './IngredientSystem.constants'
import classNames from 'classnames'

const IngredientSystem = () => {
    const [activeItems, setActiveItems] = useState([])

    const handleClick = (id) => {
        if (activeItems.includes(id)) {
            setActiveItems(activeItems.filter(item => item !== id))
        } else {
            setActiveItems([...activeItems, id])
        }
    }

    return (
        <section className='font-nunito bg-[#f7f2e7] max-mobile-sm:py-8 py-14'>
            <div className="mx-auto max-w-335 px-[15px] min-[750px]:px-[50px]">
                <div className='max-w-[800px] text-center mx-auto max-mobile-sm:mb-6 mb-4'>
                    <p className='font-lora max-mobile-sm:text-2xl text-[32px] leading-[1.3em] mb-4'><span className='text-[#039869]'>The 8-Ingredient System</span> That Restores What Hormones Once Maintained</p>
                    <p className='max-mobile-sm:text-base text-lg leading-[1.3em]'>Sculptique is the only formula that addresses ALL 6 mechanisms of lymphatic dysfunction simultaneously—not with symbolic doses, but with therapeutic amounts based on clinical research. <br />
                        Not just moving fluid temporarily. Not just reducing inflammation. <strong>Complete restoration.</strong></p>
                </div>

                <div className='mt-10 bg-white rounded-xl border-[.5px] border-black grid max-mobile-sm:grid-cols-1 grid-cols-4 overflow-hidden transition-all duration-500 ease-out'>
                    {
                        INGREDIENT_ITEMS.map(({ id, imgUrl, benefit, name, desc }) => (
                            <div key={id} className='max-mobile-sm:p-4 p-6 border-[.5px] border-black cursor-pointer' onClick={() => handleClick(id)}>

                                <div className='flex items-center gap-2 justify-center text-[#0c7c00]'>
                                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" alt="" className='max-w-4' />
                                    <p className='text-base'>{benefit}</p>
                                </div>

                                <img src={imgUrl} alt={name} className='max-mobile-sm:hidden max-mobile-sm:m-0 my-3 mx-auto max-h-20 max-w-30' />

                                <div className='flex items-center gap-2 justify-between'>
                                    <img src={imgUrl} alt={name} className='min-mobile-sm:hidden m-0 max-h-20 w-1/5' />

                                    <p className='font-bold font-trirong leading-[1.3em] max-mobile-sm:text-sm text-base max-mobile-sm:flex-1'>{name}</p>

                                    <button className='shrink-0'>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" alt="" className='w-6 max-mobile-sm:w-4.5 ml-auto' />
                                    </button>
                                </div>


                                <div className={classNames('overflow-hidden transition-[max-height, transform] duration-500 ease-out', 
                                    activeItems.includes(id)
                                    ? "max-h-[500px] translate-y-0 pt-3"
                                    : "max-h-0 -translate-y-1")}>
                                    <p className='text-sm leading-[1.3em]'>{ReactParser(desc)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='max-w-[580px] mx-auto mt-10'>
                    <img src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982" alt="" className='max-mobile-sm:hidden w-full' />
                    <img src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_3.png?v=1760697982" alt="" className='max-mobile-sm:block hidden w-full' />
                </div>

            </div>
        </section>
    )
}

export default IngredientSystem