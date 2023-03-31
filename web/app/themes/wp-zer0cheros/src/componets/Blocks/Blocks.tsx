import { Page } from '@/types/types'
import React, { Fragment } from 'react'
//import '@wordpress/block-library/build-style/media-text/style.css';

interface Props {
	blocks: Page[]
}


const Blocks = ({blocks}:Props) => {
  return (
    <div className='flex w-screen h-full'>
        {blocks.map(block => {
		switch (block.slug) {
			case 'core/media-text':
				return '..shit'
			case 'core/heading':
			case 'core/paragraph':
			default:
				return <div className='flex w-screen h-full justify-end gap-4 menu' key={block.id}  dangerouslySetInnerHTML={{ __html: block.content.rendered }} />
		}
	})
    }
    </div>
  )
}

export default Blocks