import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { useState } from "react";
import { logo, menu, close } from '../assets';
import { navLinks } from "../constants";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} p-10
      w-full flex items-center justify-center
      py-5 fixed top-0 z-20 bg-primary/80 `}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mw-auto">
        <Link to='/'
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] flex font-bold cursor-pointer">Mouhamed Mbaye &nbsp;<span className="sm:block hidden">| MERN Stack Mastery</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-orange-100" : "text-white"}
                hover:text-orange-100 
                text-[18px] 
                font-meduim 
                cursor-pointer`
              }
              onClick={() => setActive(link.title)}
              onKeyDown={((e) => console.log(e.target.value))}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} 
            p-6 black-gradient absolute 
            top-20 right-0 mx-4 my-2 min-w-{140px] 
            z-10 rounded-xl`
            }
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-secondary" : "text-white"}
                hover:text-white 
                text-[16px]
                font-poppins 
                font-meduim 
                cursor-pointer`
                  }
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar