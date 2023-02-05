import React from 'react'
import MenuCard from './MenuCard'
import cubeImage from '../../assets/cube.jpg'
import { useNavigate } from "react-router-dom";



const Menu = () => {

 const addToCartHandler = (itemNum) => {}


  return (
    <>
      <section id="menu">
        <h1 className="">PRODUCT</h1>
        <div className="">
        <MenuCard 
          itemNum={1} 
          cubeSrc={cubeImage}  
          price={100} 
          title="3x3 CUBE"
          handler={addToCartHandler}
          delay={0.2}
          view3D="/three"
          />
        <MenuCard 
          itemNum={2} 
          cubeSrc={cubeImage}  
          price={100} 
          title="4x4 CUBE"
          handler={addToCartHandler}
          delay={0.5}
          view3D="window.location.href='www.google.com';"
          />
        <MenuCard 
          itemNum={3} 
          cubeSrc={cubeImage}  
          price={100} 
          title="5x5 CUBE"
          handler={addToCartHandler}
          delay={0.8}
          view3D="window.location.href='www.linktothepage.com';"
          />
        </div>
      </section>
    </>
  )
}

export default Menu