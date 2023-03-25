import { getMenus } from "@/utils/backend/wordpress/Menu"
import Menu from '../../types/types'

const Header:React.FC<{menu: Menu[]}> = ({menu}) => {
  return (
    <div>
        <nav>
            {menu.map(m=> (
                <ul key={m.id}>
                    <li><a href={m.link}>{}</a></li>
                </ul>
            ))}
        </nav>
    </div>
  )
}

export async function getStaticProps(){
    const menu = await getMenus('en');
    return {
        props : {menu}
    }
}

export default Header