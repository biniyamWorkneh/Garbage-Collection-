import React from 'react'
import GoogleMap from './GoogleMap'
import im from "../public/bil.avif"
import {tulu} from "./datas"
import "./Contact.css"
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";


const Contact = () => {
  return (
    <div className='contact us' id='contact'>
      <GoogleMap/>
      <div className='cardo-container'>
          <img src={im} alt="" className="imagess"/>
      <div className='row'>
      {tulu.slice(0,2).map((yep, index)=>(
        <div className='cardo' key={index}>
             <h5>{yep.adress}</h5>
          <div className='cardo-body' style={{color:"blue"
        }}>
            {index=== 0 && <MdOutlineMailOutline style={{marginRight:'70px'}}/> }
            {index===1 && <MdOutlineCall style={{marginRight:'70px'}}/>
}              
          </div>
        </div>
      ))}
      </div>
      <div className='row'>
      {tulu.slice(2,4).map((yep, index)=>(
        <div className='cardo' key={index}>
          <div className='cardo-body'>
             <h5>{yep.adress}</h5>
          </div>
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default Contact