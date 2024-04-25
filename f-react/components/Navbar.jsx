import styled from 'styled-components'
import {compose,background, width} from 'styled-system'
import React from 'react'
import { useState } from 'react'
import {Link} from "react-scroll"
import { AiOutlineMenu } from "react-icons/ai";
import im from "../public/b8.jpg"
import "./Navbar.css"


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick=()=>{
        setShowMenu(!showMenu)
    }
  return (
    <nav>
        <div className="logo" style={{fontSize:'35px',fontWeight:'bold',marginTop:'0px'}}>
        <img
          src={im}
          style={{ width: "4rem", height: "3rem", }}
          alt="logo"
        />
        Tsidat
      </div>
    <div>
        <ul className={showMenu? "menu-active": "menu"}>
        {/* <img src="../public/b8.jpg" alt=""style={{marginLeft:'30px'}} /> <h1 style={{fontSize:"45px",marginTop:"10px", marginRight:"50px"}}> Tsidat</h1> */}
            <li>
            <Link   to="home"spy={true}smooth={true} offset={-60}
               duration={60}>Home</Link>
            </li>
            <li>
                <Link   to="about"spy={true}smooth={true} offset={-60}
               duration={60}>About us</Link>
            </li>
            <li>
                <Link   to="contact"spy={true}smooth={true} offset={-60}
               duration={60}>Contact us</Link>
            </li>
            <li>
                <Link   to="login"spy={true}smooth={true} offset={-60}
               duration={60}>Login</Link>
            </li>
        </ul>
        <div className='menu-icon' onClick={handleClick}>
            <AiOutlineMenu/>
        </div>
    </div></nav>
  )
}

export default Navbar


const Container = styled.nav`
  background-color:green;
  ${compose(background,width)}
`