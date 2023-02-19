import React from 'react';
import {motion} from 'framer-motion';
import me from '../../assets/admin.jpg'
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
  };

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
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


        <motion.button
        onClick={logoutHandler}
        >
          LOGOUT
        </motion.button>
      </main>

    </section>
  )
}

export default Profile