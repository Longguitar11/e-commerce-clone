import React, { useState } from 'react'
import ReactParser from 'html-react-parser'
import { FAQ_ITEMS } from './FAQ.constants'
import { FaAngleDown } from 'react-icons/fa6'
import classNames from 'classnames'

const FAQ = () => {
    const [activeItems, setActiveItems] = useState([])

    const handleActiveItem = (id) => {
        if (activeItems.includes(id)) {
            setActiveItems(activeItems.filter(item => item !== id))
        } else {
            setActiveItems([...activeItems, id])
        }
    }
    return (
        <section className='font-nunito max-mobile-sm:py-8 py-14'>
            <div className="page-width">
                <p className='text-[32px] max-mobile-sm:text-2xl leading-[1.3em] font-lora text-center mb-4'>Frequently Asked Questions</p>

                <div className='max-w-[824px] mx-auto max-mobile-sm:p-4 p-8 overflow-hidden rounded-2xl' style={{ background: 'linear-gradient(180deg,#fff,#f3eee0)' }}>
                    {
                        FAQ_ITEMS.map(({ id, question, answer }) => (
                            <div key={id} className='max-mobile-sm:p-[16px_0] py-5 px-6 cursor-pointer border-b border-white last:border-0' onClick={() => handleActiveItem(id)}>
                                <div className='flex gap-3 justify-between items-center'>
                                    <p className='text-lg leading-[1.3em]'>{question}</p>
                                    <FaAngleDown className={classNames('shrink-0 w-4 opacity-75 transition-transform duration-400', activeItems.includes(id) && 'rotate-180')} />
                                </div>

                                <p className={classNames('text-base leading-[1.3em] transition-all duration-500 overflow-hidden', activeItems.includes(id) ? 'max-h-[1000px] pt-4 translate-y-0 opacity-100' : 'max-h-0 -translate-y-3 opacity-0')}>{ReactParser(answer)}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-6 space-y-4'>
                    <a href="https://pay.trysculptique.com/lymphatic/checkout" target='_blank' className='mx-auto max-mobile-sm:w-full w-fit block text-center no-underline! text-white! py-4.5 px-20 max-mobile-sm:p-4 max-mobile-sm:text-base text-lg leading-[1.3em] bg-black rounded hover:opacity-60 transition-colors duration-200'>Try Lymphatic Drainage Risk-Free</a>
                    <div className='flex gap-4 items-center justify-center text-base'>
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" alt="" className='w-6' />
                        <p>60-Day Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ