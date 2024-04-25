// rafc
import { useState } from "react";
import logo from "../assets/logo.png";
import {Link} from "react-scroll"
import { GrLanguage } from "react-icons/gr";
import { FaXmark,FaBars } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu= ()=>{
        setIsMenuOpen(!isMenuOpen)

    }



    const navitems = [
        {link:"Overview" , path:"home"},
        {link:"Feature" , path:"feature"},
        {link:"About" , path:"about"},
        {link:"Pricing" , path:"pricing"},
    ]
    return (
        <>

        <nav className="bg-white md:px-14 p-4 max-w-screen-2x1 mx-auto text-primary fixed top-0 right-0 left-0 border-b">
            <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                <div className="flex space-x-14 items-center">
                    <a href="/" className="text-2xl font-semibold flex space-x-3 items-center text-primary"><img src={logo} alt="" className="w-16 h-16 mt-1 rounded-xl inline-block items-center" /><span>XYZ</span></a>

                    <ul className="md:flex space-x-12 hidden">
                        {
                            navitems.map(({link,path})=><Link activeClass="active" spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-gray-300 cursor-pointer">{link}</Link>
                        )
                        }
                    </ul>
                </div>
                

                <div className="space-x-12 hidden md:flex items-centre"> 
                    <a href="/" className="hidden lg:flex items-center hover:text-secondary"><GrLanguage className="mr-2" />Language</a>
                    <button className="bg-secondary py-2 px-4 transition-all rounded duration-300 hover:text-white hover:bg-indigo-600 ">Sign up</button>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300 ">
                        {
                            isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary"/>) : (<FaBars className=" w-6 h-6 text-primary "/>)
                        }

                    </button>

                </div>
            </div>

        </nav>

        <div className={`space-y-4 px-4 pt-28  pb-5 text-xl bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0": "hidden"}`}>
                {
                    navitems.map(({link,path})=><Link activeClass="active" spy={true} smooth={true} offset={-80} key={link} to={path} className="block text-white hover:text-gray-300" onClick={toggleMenu}>{link}</Link>
                )
                }  

        </div>
        </>



    )
}

export default Navbar
