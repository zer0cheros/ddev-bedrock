import React, { Fragment } from 'react'
//import '@wordpress/block-library/build-style/media-text/style.css';




const Blocks = ({blocks}) => {
  return (
    <div>
        {blocks.map(block => {
		switch (block.blockName) {
			case 'core/media-text':
				return '..shit'
			case 'core/heading':
			case 'core/paragraph':
			default:
				return <div key={block.id}  dangerouslySetInnerHTML={{ __html: block.content.rendered }} />
		}
	})
    }
    </div>
  )
}

export default Blocks