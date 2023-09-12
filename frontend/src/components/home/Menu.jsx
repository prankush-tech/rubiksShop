import React from 'react'
import MenuCard from './MenuCard'
import cube1 from '../../assets/cube1.png'
import cube2 from '../../assets/cube2.png'
import cube3 from '../../assets/cube3.png'
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";



const Menu = () => 
{
  const dispatch = useDispatch();
  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "MKOTOIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "NKOTOIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "BKOTOIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "MKOTOIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };


  return (
    <>
      <section id="menu">
        <h1 className="">PRODUCT</h1>
        <div className="">
        <MenuCard 
          itemNum={1} 
          cubeSrc={cube2}  
          price={10} 
          title="MKOTO"
          handler={addToCartHandler}
          delay={0.2}
          view3D="https://my.spline.design/untitled-4e7064ad9e766291d054b80407ca2375/"
          />
        <MenuCard 
          itemNum={2} 
          cubeSrc={cube3}  
          price={20} 
          title="NKOTO"
          handler={addToCartHandler}
          delay={0.4}
          view3D="https://my.spline.design/glasscubecopy-4cbd9ac02d494d8d58f192588878aa2c/"
          />
        <MenuCard 
          itemNum={3} 
          cubeSrc={cube1}  
          price={25} 
          title="BKOTO"
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