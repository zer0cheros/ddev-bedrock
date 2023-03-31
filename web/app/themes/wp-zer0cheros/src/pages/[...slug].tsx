import { getPages, getPage } from '@/utils/backend/wordpress/Pages';
import {Page, Categories, Products, Menu} from '@/types/types';
import PageComponet from '@/componets/PageComponet/PageComponet';
import Blocks from '@/componets/Blocks/Blocks';
import {Router, useRouter} from 'next/router';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import ShopContainer from '@/componets/Shop/ShopContainer';
import { getProductCategories, getProducts } from '@/utils/backend/wordpress/Products';
import { getMenus } from '@/utils/backend/wordpress/Menu';
import Layout from '@/componets/layout/Layout';
import Header from '@/componets/layout/Header';

interface Props {
	page: Page[],
	pages: Page[]
	products: Products[],
	category: Categories[],
	lang: string
}

const Pages = ({page, products, category, lang, pages}:Props) => {
	const router = useRouter()
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	if(page[0].slug == 'shop'){
		return (
			<Layout lang={lang} menus={pages}>
		 	<ShopContainer categories={category} products={products}/>
			</Layout>
		)
	}else {
		return (
    <div>
		<PageComponet pageProps={page} />
		<Blocks blocks={page} />
	</div>
  )
	}
}
export default Pages

export async function getStaticProps({params}:Params){
	if (!params || !params.slug || params.slug.length < 2) {
		return {
		  notFound: true,
		};
	  }
	
	const page = await getPage(params.slug[1])
	const lang = params.slug[0]
	const pages = await getPages()
	const products = await getProducts()
	const category = await getProductCategories()
    return {
        props: {
            page,
			products,
			category,
			lang,
			pages
        }
    }
}
export async function getStaticPaths() {
	const pages = await getPages();
	let paths;
	if(Array.isArray(pages)) {
	paths = pages.map((page) => {
	  return {
		params: {
		  slug: [page.slug],
		},
	  };
	});
}
	return {
	  paths,
	  fallback: true,
	};
  }