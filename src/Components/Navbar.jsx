import { useState } from "react";
import Alat from "../assets/Logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
const Navbar = () =>{
     const [isOpen, setIsOpen] = useState(false);
     const toggleMenu = () =>{
        setIsOpen(!isOpen);
     }
    return(
    //  <>
     <div className= {isOpen ? ' px-3 py-3 flex justify-between items-center md:flex md:flex-row md:px-20' : 'px-3 py-3 flex justify-between items-center md:flex md:flex-row md:px-12 lg:px-20'}>
        <div>
            <img src={Alat} alt="Alat" />
        </div>

        <div className="" onClick={toggleMenu}>
            {!isOpen ? (
                <GiHamburgerMenu className="text-2xl text-white cursor-pointer lg:hidden"/>
                ): <MdOutlineClose className="text-2xl relative  top-0 right-0 text-white cursor-pointer lg:hidden "/>}
       </div>
     {isOpen && ( 
            <div className=" bg-black w-full h-screen p-0 m-0  text-gray-600 absolute top-0 left-0 z-50 overflow-hidden shadow-2xl py-10 space-y-3 capitalize ps-5">
              <MdOutlineClose onClick={toggleMenu} className="text-2xl absolute top-0 right-0 h-24 w-8 text-white cursor-pointer  lg:hidden "/>
            
                <div className="hover:text-white hover:translate-y-1">
                    <a href="/">personal</a>
                </div>
                
                <div className="hover:text-white hover:translate-y-1">
                    <a href="/">business</a>
                </div>
                <div className="hover:text-white hover:translate-y-1">
                    <a href="/">about</a>
                </div>
                <div className="hover:text-white hover:translate-y-1">
                    <a href="/">features</a>
                </div>
                <div className="hover:text-white hover:translate-y-1">
                    <a href="/">Alat life</a>
                </div>
                <div className="hover:text-white hover:translate-y-1">
                    <a href="/">help</a>
                </div>
                <div className="hover:text-white hover:translate-y-1 ">
                    <a href="/">developer</a>
                </div>

                <div className="flex gap-4 text-sm md:hidden">
                    <a href="" className="px-3 py-2 border-2 border-gray-500 text-gray-500 rounded capitalize hover:border-white hover:translate-y-1">login</a>
                    <a href="" className="bg-white px-3 py-2 text-center text-black border-2-gray-500 capitalize rounded semi-bold hover:opacity-50 hover:translate-y-1">sign up</a>
                </div>
        </div>
     )}
        <div className="hidden md:hidden lg:flex space-x-10 pr-12  text-gray-500 text-sm capitalize lg:space-x-12 lg:pr-8">
            <div className="hover:text-white hover:translate-y-1">
                <a href="/">personal</a>
            </div>
            <div className="hover:text-white hover:translate-y-1">
                <a href="/">business</a>
            </div>
            <div className="hover:text-white hover:translate-y-1">
                <a href="/">about</a>
            </div>
            <div className="hover:text-white hover:translate-y-1">
                <a href="/">features</a>
            </div>
            <div className="hover:text-white hover:translate-y-1">
                <a href="/">Alat life</a>
            </div>
            <div className="hover:text-white hover:translate-y-1">
                <a href="/">help</a>
            </div>
            <div className="hover:text-white hover:translate-y-1 ">
                <a href="/">developer</a>
            </div>
        </div>
        <div className="hidden md:hidden lg:flex gap-4 text-sm">
            <a href="" className="px-3 py-2 border-2 border-gray-500 text-gray-500 rounded capitalize hover:border-white hover:translate-y-1">login</a>
            <a href="" className="bg-white px-3 py-2 text-center border-2-gray-500 capitalize rounded semi-bold hover:opacity-50 hover:translate-y-1">sign up</a>
        </div>
       
     </div>
    //  </>
    );
};
export default Navbar 