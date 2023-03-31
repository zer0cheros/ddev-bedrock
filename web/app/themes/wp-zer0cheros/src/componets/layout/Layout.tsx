import {Page, Menu} from '@/types/types'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer';


interface LayoutProps {
    lang: string,
    menus: Page[],
    children: React.ReactNode;
}

const Layout = ({menus, lang, children}:LayoutProps) => {
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <Header lang={lang} menus={menus} />
      <div className='w-full min-h-[80vh]'>
      {children}
      </div>
      <Footer />
    </div>
  )
}



export default Layout