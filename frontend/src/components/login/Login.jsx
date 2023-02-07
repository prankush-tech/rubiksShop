import React from 'react'
import {motion} from 'framer-motion'
import {BsGoogle} from 'react-icons/bs'

const Login = () => {
  return (
    <section className="login">

      <motion.button
      initial={{y: "-100vh"}}
      animate={{y: 0}}
      
      >
        LOGIN with Google
        <BsGoogle />
      </motion.button>
    </section>
  )
}

export default Login