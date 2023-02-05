import React from 'react'
import { motion } from 'framer-motion';
import founder from '../../assets/founder.jpg'

const Founder = () => {
  return (
    <>
    <section className="founder">
      <motion.div className="">
        <h1>FOUNDER-CEO</h1>
      <img src={founder} alt="Founder" height={200} width ={160} />
        <h2>Prankush Giri</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, amet.</p>

        </motion.div> 
    </section>
    </>
  )
}

export default Founder