import React from 'react'
import "./Footer.css"
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
const Footer = () => {
  return (
    <div className='footer'>
     <div className='text'>
        <h2>company</h2>
        <p>E-Garbage Collection</p>
        <h3>Copyright 2024 developed by A4B.rights are reserved</h3>
     </div>
     <div className='getin'>
        <h2>Get in Touch</h2>
        <p><IoLocationSharp style={{color:"blue",fontSize:"20px"}}/>akaki</p>
        <p><MdOutlineMailOutline style={{color:"blue",fontSize:"20px"}} />akakikaliti111@gmail.com</p>
        <p><IoMdCall  style={{color:"blue",fontSize:"20px"}}/> 0899745676</p>

     </div>
   
    </div>
  )
}

export default Footer