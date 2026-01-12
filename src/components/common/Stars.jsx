import classNames from 'classnames'
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

const Stars = ({ stars, className }) => {
  const renderedStar = Array.from({ length: 5 }, (_, index) =>
    index < stars ? <FaStar key={index} /> : <FaRegStar key={index} />
  )

  return (
    <div className={classNames('flex gap-1 items-center [&>svg]:fill-salmon', className)}>
      {renderedStar}
    </div>
  )
}

export default Stars