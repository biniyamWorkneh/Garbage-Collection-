import React from 'react'
import "./About.css"
import { FaStar } from "react-icons/fa6";
import {cardsData} from "../components/data"
const About = () => {
  return (
    <div>
    <div className='biniyam' id='about'>
 <div className="card">
  <div className="card-body">
    <h5 className="card-titles" >Tsidat Garbage Collection system</h5>
  </div>
</div>
    </div>
    <div>
   <div className='textcard' style={{display:"flex"}}>
    {cardsData.map((card)=>(
    <div className='cards' style={{marginRight:"30px"}}>
    <h3 className='card-title'>{card.title}</h3>
    <h5 className='card-body'><FaStar style={{color:"green"}} />{card.obj}</h5>
    <h5 className='card-body'><FaStar style={{color:"green"}} />{card.obj}</h5>
    <h5 className='card-body'><FaStar style={{color:"green"}} />{card.obj}</h5>
 </div>
    ))}
   </div>
  
   </div>
   </div>
  

  )
}

export default About