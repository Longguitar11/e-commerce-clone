import React from 'react'
import { LOGO_1, LOGO_2, LOGO_3 } from './AsSeenIn.constants'
import LogoRow from './AsSeenIn.components'

const AsSeenIn = () => {
    return (
        <section className='bg-[#f3eee0] py-5 overflow-hidden'>
            <p className='max-[900px]:text-[18px] text-[24px] font-trirong text-center mb-[20px]'>As Seen In</p>
            <div className="relative overflow-hidden">
                <div className="flex w-max animate-logo-scroll">
                    <LogoRow />
                    <LogoRow />
                    <LogoRow />
                    <LogoRow />
                    <LogoRow />
                    <LogoRow />
                </div>
            </div>

        </section>
    )
}

export default AsSeenIn