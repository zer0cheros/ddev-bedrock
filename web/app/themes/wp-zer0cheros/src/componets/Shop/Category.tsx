import { Categories } from '@/types/types';
import React from 'react'

interface Props {
	categories: Categories[]
}


const Category = ({categories}:Props) => {
  return (
    <div className='h-full w-[20%] p-10'>
    <ul className='list-item'>
      {categories.map(c => (
        <li key={c.id} className='text-base font-medium text-gray-800 hover:text-blue-600 relative'>
          <a className='none' href={''}>
            {c.name}
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 absolute top-1/2 transform -translate-y-1/2 right-0 pointer-events-none'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Category