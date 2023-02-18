import React from 'react'
import {motion} from 'framer-motion'
import {BsGoogle} from 'react-icons/bs'
import {server} from '../../redux/store'

const Login = () => {

  const loginHandler = () => {

    window.open(`${server}/googlelogin`, "_self")
  }

  return (
    <section className="login">

      <motion.button
      initial={{y: "-100vh"}}
      animate={{y: 0}}
      onClick={
        loginHandler
      }
      >
        LOGIN with Google
        <BsGoogle />
      </motion.button>
    </section>
  )
}

export default Login