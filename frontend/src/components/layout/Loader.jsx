import React from 'react'
import {motion} from 'framer-motion'
import {GiMeltingIceCube} from 'react-icons/Gi'

const Loader = () => {

    const options = {
        initial: {opacity:0},
        animate: {opacity:1},
        transition:{ ease:"linear", repeat:Infinity,
        repeatType:"reverse"
     }
    }

  return (
    <div className="loader">
        <GiMeltingIceCube />
        <div>
        <motion.p {...options}>
            Loading...
        </motion.p>
        </div>
    </div>
  )
}

export default Loader