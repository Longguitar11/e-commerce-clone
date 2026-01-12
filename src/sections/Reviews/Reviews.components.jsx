import classNames from 'classnames'
import { useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

export const StarRating = ({ total = 5, value = 0, onChange }) => {
  const [hovered, setHovered] = useState(null)

  const displayValue = hovered ?? value

  return (
    <div className='flex items-center [&>button]:pr-1'>
      {Array.from({ length: total }).map((_, index) => {
        const starValue = index + 1
        const isFilled = starValue <= displayValue

        return (
          <button
            key={starValue}
            type='button'
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onChange?.(starValue)}
            className='cursor-pointer [&>svg]:text-[150%]'
          >
            {isFilled ? (
              <FaStar className='text-salmon hover:opacity-60 transition-opacity duration-200' />
            ) : (
              <FaRegStar className='text-salmon' />
            )}
          </button>
        )
      })}
    </div>
  )
}

export const Button = ({ children, onClick, type, className }) => {
  return (
    <button type={type} onClick={onClick} className={classNames('whitespace-nowrap w-full bg-salmon leading-none mx-auto py-2.5 px-5 text-white font-bold hover:opacity-80 transition-opacity durantion-200', className)}>
      {children}
    </button>
  )
} 
