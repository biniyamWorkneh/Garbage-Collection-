import React from 'react'
import Carousel from './Carousel'
import "./Home.css"

const Home = () => {
    const images = [
    "../public/b7.webp",
   "../public/b.jpeg",
   "../public/b2.jpeg",
   "../public/b3.jpeg",  
    "../public/b5.jpeg",
    "../public/b6.jpeg"
];
  return (
    <div className='homeme' id='home' style={{marginTop:"200px"}}>
        
        <Carousel images ={images}/>
    </div>
  )
}

export default Home