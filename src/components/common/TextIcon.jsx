import React from 'react'

const TextIcon = ({ urlIcon, text }) => {
    return (
        <div className='flex items-center gap-3'>
            <div className='w-[10%] flex justify-center'>
                <img src={urlIcon} alt="" className='w-full' />
            </div>
            <p className=''>{text}</p>
        </div>
    )
}

export default TextIcon