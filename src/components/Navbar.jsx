import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleNavbar = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 bg-[#E9F3F4] border border-b-gray-200">
     <div className="container mx-auto px-4 md:px-16 text-sm ">
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img className="w-8 " src={logo} alt="logo" />
              <span className="text-2xl font-bold text-[#012332]">Finpay</span>
            </div>
            <ul className="hidden lg:flex space-x-8 ml-20 ">
              {navItems.map((item, index) => (
                <li key={index} className="text-[16px]">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            </div>
            <div className="hidden lg:flex gap-4">
              <a href="#" className="py-2 px-6 border border-gray-500 rounded-lg">Login</a>
              <a href="#" className="py-2 px-6 border rounded-lg bg-[#28AE9E]">SignUp</a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                 {mobileMenu ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileMenu && (
            <div className="fixed right-0 z-20 w-full p-[52px] flex flex-col lg:hidden justify-center text-[16px] bg-[#E9F3F4]"> 
              <ul>
              {navItems.map((item, index) => (
                <li key={index} className="p-3 rounded-lg hover:bg-[#f5fafa]">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}

              </ul>
              <hr />
              <div className="  flex gap-6 p-8">
              <a href="#" className="py-2 px-6 border border-gray-500 rounded-lg">Login</a>
              <a href="#" className="py-2 px-6 border rounded-lg bg-[#28AE9E] text-white">SignUp</a>
            </div>
              </div>
          )}
          </div>
      </nav>

    </>
  )
}

export default Navbar
