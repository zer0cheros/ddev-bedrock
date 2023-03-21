import React from 'react'
import Layout from '@/componets/layout/Layout'
import { getPages } from '@/utils/backend/wordpress/api'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

const index = ({pages}) => {
  return (
    <Layout title='NextJs Wordpress cms' pages={pages}  />
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

export async function getStaticProps(){
    const pages = await getPages()
    return {
        props: {
            pages
        }
    }
}

export default index