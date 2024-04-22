import React from 'react'
import oii from "../public/b9.jpg"
import "./Login.css"
const Login = () => {
  return (
    // <div className='lognini' id='login'>

    //     <div className='conatainer'style={{}}>
    // <img src={oii} alt="" style={{height:"400px"}}/>
    //    <h1>Welcome To Tsidat</h1>
    //    <input type="text" placeholder='Email' style={{height:"40px",marginTop:'70px',marginLeft:"50px"}}/>
    //     </div>
    // </div>
    <div className='logipage' id='login'>
      <div className=' cards'style={{width:'auto',height:"auto",display:'flex'}}>
        <div className='card-bodys'>
        <img src={oii} alt="" className='images' />
        <div>
          <h1 className='hoo'>Welcome To Tsidat</h1>
          <h1 className='hoo'>Email</h1>
       <input type="text" placeholder='Email' className='imput'/>
       <h1 className='hoo'>Password</h1>
       <input type="text"placeholder='Password' className='imput' />
       <p className='passage'>forgot Password</p>
       <button className='button'>Login</button>
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default Login