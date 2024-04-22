import React, { useState } from 'react'
import io from '../public/b6.jpeg'
import "./Nav.css"
import { BiChevronDown } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
const Nav = () => {
    const [showList, setShowList] =useState(false)
    const toggleList=()=>{
        setShowList(!showList)
    }
  return (
   <nav className='eshi'>
   <div className='profile'>
    <img src={io} alt="" className = 'images' />
     Group:kilinto
     <BiChevronDown onClick={toggleList} />
        {showList && (
          <ul className="nav-list">
            <li><IoIosLogOut />logout</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        )}
   </div>
   </nav>
  )
}

export default Nav