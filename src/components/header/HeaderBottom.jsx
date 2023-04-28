import { secondHeaderItems } from "../../constants/AllItems";
import {GiHamburgerMenu} from 'react-icons/gi'
const HeaderBottom = () => {
  return (
    <div className="w-full px-4 h-[36px]  bg-amazon_light text-white flex items-center ">
      {
        <ul className="flex items-center gap-2 text-sm tracking-wide">
          <li className="headerHover flex items-center gap-1"><GiHamburgerMenu className="h-5 w-5"/> All</li>
          {secondHeaderItems.map((item)=>{
            return <li key={item.id} className="headerHover">{item.title}</li>
          })}
        </ul>
      }
    </div>
  )
}

export default HeaderBottom;