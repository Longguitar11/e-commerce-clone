import React from 'react'
import { ICON_ITEMS } from './Icons.constants'

const Icons = () => {
    return (
        <section className='py-8 bg-[#f3eee0]'>
            <div className="mx-auto max-w-335 px-[15px] min-[750px]:px-[50px] grid max-mobile-sm:grid-cols-2 grid-cols-4 gap-6">
                {
                    ICON_ITEMS.map(item => (
                        <div key={item.id} className='flex flex-col items-center'>
                            <img src={item.iconUrl} alt="" className='size-10 shrink-0 mb-4' />
                            <div className='flex-1 text-center space-y-2 text-base'>
                                <p className='font-semibold'>{item.title}</p>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Icons