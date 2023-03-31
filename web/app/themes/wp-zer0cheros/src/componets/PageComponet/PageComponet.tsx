import React from 'react'
import {Page} from '@/types/types'


const PageComponet:React.FC<{pageProps: Page[]}> = ({pageProps}) => {
    return (
    <div className='min-h-screen w-screen bg-slate-400'>
        {pageProps.map(page=>(
            <div key={page.id}>
                <h1>{page.title?.rendered}</h1>
            </div>
        ))}
    </div>
  )
}

export default PageComponet