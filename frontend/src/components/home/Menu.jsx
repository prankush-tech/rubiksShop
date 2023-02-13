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
          view3D="https://my.spline.design/untitled-4e7064ad9e766291d054b80407ca2375/"
          />
        <MenuCard 
          itemNum={2} 
          cubeSrc={cubeImage}  
          price={100} 
          title="4x4 CUBE"
          handler={addToCartHandler}
          delay={0.4}
          view3D="/cube2"
          />
        <MenuCard 
          itemNum={3} 
          cubeSrc={cubeImage}  
          price={100} 
          title="5x5 CUBE"
          handler={addToCartHandler}
          delay={0.6}
          view3D="/cube3"
          />
        </div>
      </section>
    </>
  )
}

export default Menu