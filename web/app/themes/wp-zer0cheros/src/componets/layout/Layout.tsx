import Page from '@/types/types'

interface LayoutProps {
    title: string,
    pages: Page[]
}

const Layout = ({title, pages}:LayoutProps) => {
  return (
    <div>
    <title>{title}</title>
    <h1>This is fun</h1>
    {pages.map(p=>(
        <div key={p.id}>
            <a href={`http://localhost:3000/en/${p.slug}`}>{p.title.rendered}</a>
        </div>
    ))}
    </div>
  )
}



export default Layout