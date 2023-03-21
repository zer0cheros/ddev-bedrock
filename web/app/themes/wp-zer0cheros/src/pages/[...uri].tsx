import { getPages, getPage } from '@/utils/backend/wordpress/api';
import Page from '@/types/types';
import PageComponet from '@/componets/PageComponet/PageComponet';
import Blocks from '@/componets/Blocks/Blocks';
import { useRouter } from 'next/router';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface Props {
	page: Page[]
}

const page = ({page}:Props) => {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
  return (
    <div>
		<PageComponet pageProps={page} />
		<Blocks blocks={page} />
	</div>
  )
}

export default page

export async function getStaticProps({params}:Params){
	console.log(params.uri[1])
	const page = await getPage(params.uri[1])
    return {
        props: {
            page
        }
    }
}


export async function getStaticPaths() {
	const pages = await getPages();
	const paths = pages.map((page) => {
	  const uri = new URL(page.link).pathname.replace(/^\/|\/$/g, '');
	  return {
		params: {
		  uri: [...uri]
		}
	  }
	});
	return {
	  paths: paths,
	  fallback: true
	}
}

