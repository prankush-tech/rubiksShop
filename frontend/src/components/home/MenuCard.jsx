import React from 'react'
import {motion} from 'framer-motion'

const MenuCard = ({itemNum,cubeSrc ,price,title, handler,delay=0,view3D}) => {
  return (
    <motion.div 
    className="menuCard"
    initial={{
        opacity:0,
        x:"-100",
    }}
    whileInView={{
        opacity:1,
        x:"0",
    }}
    transition={{
        delay,
    }}
    
    >
        <div >CUBE {itemNum}</div>
        <main>
            <img src={cubeSrc} alt="cube" />
            <h5>Rs{price}</h5>
            <p>{title}</p>
            <button onClick={()=>handler(itemNum) } >BUY NOW </button>
            <button>
                <a href={view3D}>VIEW 3D</a>
            </button>
        </main>
    </motion.div>
  )
}

export default MenuCard