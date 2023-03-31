import { getMenus } from "@/utils/backend/wordpress/Menu"
import {Page} from '../../types/types'
import Blocks from "../Blocks/Blocks";

const Header:React.FC<{menus: Page[], lang:string}> = ({menus, lang}) => {

  return (
    <div className="bg-slate-50 w-full h-[10vh] shadow-md flex justify-between gap-20 items-center px-20">
      <div className="search text-black">
      <i className="fas fa-search text-2xl"></i>
      </div>
      <div className="flex flex-col justify-center text-center gap-3">
        <h2 className="font-bold text-3xl text-slate-900">Wordpress + Nextjs</h2>
        <ul className="flex gap-4">
          {menus.map(menu=>(
            <li key={menu.id}><a className="font-semi-bold text-md" href={`/${lang}/${menu.slug}`}>{menu.title.rendered}</a></li>
          ))}
        </ul>
        </div>
        <div className="social-links flex justify-between gap-10 items-center">
          <a href="#" className="text-black">
            <i className="fas fa-user text-2xl"></i>
          </a>
          <a href="#" className="text-black">
            <i className="fas fa-shopping-cart text-2xl"></i>
          </a>
        </div>
    </div>
  )
}

export async function getStaticProps(){
    const menus = await getMenus();
    return {
        menus
    }
}

export default Header