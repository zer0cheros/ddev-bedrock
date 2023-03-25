import Page from '@/types/types'
import Menu from '@/types/types'
import Head from 'next/head'
import Header from './Header'


interface LayoutProps {
    title: string,
    pages: Page[]
    lang: string,
    menu: Menu[]
}

const Layout = ({title, pages, lang, menu}:LayoutProps) => {
  return (
    
    <div>
      <Head>
        <title>My Page Title | My Website</title>
        <meta name="description" content="This is my page description." />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="This is my page description." />
        <meta property="og:image" content="https://mywebsite.com/images/my-page-image.jpg" />
        <meta property="og:url" content="https://mywebsite.com/my-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Page Title" />
        <meta name="twitter:description" content="This is my page description." />
        <meta name="twitter:image" content="https://mywebsite.com/images/my-page-image.jpg" />
      </Head>
      <title>{title}</title>
    
      {pages.map(p=>(
        <div key={p.id}>
          <a href={`${process.env.FRONTEND_API}/${lang}/${p.slug}`}>{p.title?.rendered}</a>
        </div>
    ))}
    </div>
  )
}



export default Layout