import React from 'react'
import MenuCard from './MenuCard'
import cube1 from '../../assets/cube1.png'
import cube2 from '../../assets/cube2.png'
import cube3 from '../../assets/cube3.png'
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
          cubeSrc={cube2}  
          price={100} 
          title="MKoto"
          handler={addToCartHandler}
          delay={0.2}
          view3D="https://my.spline.design/untitled-4e7064ad9e766291d054b80407ca2375/"
          />
        <MenuCard 
          itemNum={2} 
          cubeSrc={cube3}  
          price={100} 
          title="NKoto"
          handler={addToCartHandler}
          delay={0.4}
          view3D="https://my.spline.design/glasscubecopy-4cbd9ac02d494d8d58f192588878aa2c/"
          />
        <MenuCard 
          itemNum={3} 
          cubeSrc={cube1}  
          price={100} 
          title="BKoto"
          handler={addToCartHandler}
          delay={0.6}
          view3D="https://my.spline.design/glasscubecopycopy-8cba20066362441d1f727491bd077014/"
          />
        </div>
      </section>
    </>
  )
}

export default Menu