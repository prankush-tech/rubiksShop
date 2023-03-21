import React from 'react'
import {Link} from 'react-router-dom'
import {FiShoppingCart, FiLogIn} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa'
import {GiMeltingIceCube} from 'react-icons/gi'
import {motion} from 'framer-motion'



const Header = ({isAuthenticated = false}) => {
  return (
    <nav>
      <motion.div className=""
      initial={{x:"-100%"}}
      whileInView={{x:0}}
      whileHover={{ scale: 1.2 }}
      >
        <GiMeltingIceCube />
        <h1>RUBIK'S CUBE</h1>
      </motion.div>

    <div>
      <Link className="arrow" to='/'>Home</Link>
      <Link className="arrow" to='/contact'>Contact</Link>
      <Link className="arrow" to='/about'>About</Link>
      <Link  to='/cart'>
        <FiShoppingCart /> 
        
      </Link>

      <Link to ={isAuthenticated?'/me':'/login'}>
        {isAuthenticated ? <FaUser/> : <FiLogIn />}

      </Link>
    </div>


    </nav>
  )
}

export default Header