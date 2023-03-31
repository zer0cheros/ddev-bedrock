import React from 'react'
import Layout from '@/componets/layout/Layout'
import { getPages } from '@/utils/backend/wordpress/Pages'
import {Menu, Page} from '@/types/types'
import Hero from '@/componets/layout/Hero'
import { getMenus } from '@/utils/backend/wordpress/Menu'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { getMediaById } from '@/utils/backend/wordpress/Media'


const index:React.FC<{pages: Page[], lang:string, media:Page[]}> = ({pages, lang}) => {
  return (
    <Layout lang={lang} menus={pages} >
      <Hero/>
    </Layout>
  )
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { lang: 'en' } },
        { params: { lang: 'fi' } },
        { params: { lang: 'se' } },
      ],
      fallback: false,
    };
}

export async function getStaticProps({params}: Params){
    const lang = params.lang
    const pages = await getPages()
    const menus = await getMenus()
    //const media = await getMediaById(427)
    return {
        props: {
            pages,
            menus,
            lang,

        }
    }
}

export default index