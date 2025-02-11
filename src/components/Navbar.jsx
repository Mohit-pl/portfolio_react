import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const link = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 1,
            link: 'about'
        },
        {
            id: 1,
            link: 'portfolio'
        },
        {
            id: 1,
            link: 'skills',
        },
        {
            id: 1,
            link: 'contact'
        },
    ]
    return (
        <div className='flex justify-between items-center w-[98%] md:w-full h-20 px-4 text-white bg-black z-20 fixed'>
            <div>
                <h1 className="text-4xl font-cursive">Mohit Pal</h1>
            </div>
            <ul className='hidden md:flex'>
                {link.map(({id, link}) => <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
               <Link to={link} smooth duration={500} >{link}</Link>
                    </li>)}
            </ul>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' >
               {nav?<FaTimes size={30}/>:<FaBars size={30}/>} 
            </div>
            {nav&&<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {link.map(({id, link}) => <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to={link} onClick={()=>setNav(!nav)} smooth duration={500} >{link}</Link>
</li>)}
            </ul>}
        </div>
    )
}

export default Navbar
