import React from 'react';
import {motion} from 'framer-motion';
import me from '../../assets/founder.jpg'
import {Link} from 'react-router-dom';

const Profile = () => {

  const options = {

    initial:{
      y:"-100%",
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
    }
  }

  return (
    <section className="profile">
      <main>

        <motion.img src={me} alt="user" {...options} />

        <motion.h5 {...options} transition={{delay:0.3}}>
          Prankush
        </motion.h5>


        <motion.div {...options} transition={{delay:0.5}}>
          <Link to="/admin/dashboard">DASHBOARD</Link>
        </motion.div>


        <motion.div {...options} transition={{delay:0.5}}>
          <Link to="/myorders">ORDERS</Link>
        </motion.div>


        <motion.button>
          LOGOUT
        </motion.button>
      </main>

    </section>
  )
}

export default Profile