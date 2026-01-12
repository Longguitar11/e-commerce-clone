import classNames from 'classnames'
import React from 'react'

const TextIcon = ({ urlIcon, text, className, iconCustom, textCustom }) => {
    return (
        <div className={classNames('flex items-center gap-3', className)}>
            <div className={classNames('w-[10%] flex justify-center', iconCustom)}>
                <img src={urlIcon} alt="" className='w-full' />
            </div>
            <p className={classNames('text-base leading-[1.3em]', textCustom)}>{text}</p>
        </div>
    )
}

export default TextIcon