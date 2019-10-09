import React from 'react'
import { Link } from 'gatsby'
import { getCardBackgroundColor } from './getCardBackgroundColor'

const Card = ({ title, date, slug, imageName, first }: Props) => {
  return (
    <li className='md:my-3 my-2 xl:px-4 lg:px-5 px-4 xl:w-1/3 lg:w-1/2  md:w-1/2 w-full h-48'>
      <Link
        to={`/${slug}/`}
        id={first ? 'focusFirstCard' : undefined}
        className='flex flex-col justify-between px-4 py-3 h-full relative overflow-hidden rounded bg-gray-800 shadow-md focus:outline-none card focus:shadow-outline-gray-200'
        style={{ backgroundColor: getCardBackgroundColor(imageName) }}
      >
        <h2 className='md:text-2xl text-3xl font-medium text-gray-300 leading-tight z-10'>
          {title}
        </h2>
        <h3 className='opacity-75'>{date}</h3>
        <img
          src={`/images/${imageName}.svg`}
          alt={`${imageName} icon`}
          loading='lazy'
          className='md:w-40 w-48 md:h-40 h-48 md:-m-8 -m-10 opacity-25 absolute bottom-0 right-0 drag-none cardImage transition'
        />
      </Link>
    </li>
  )
}

export default Card