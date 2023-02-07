import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <section className="contact">

    <motion.form>

        <h2>
            CONTACT ME
        </h2>

        <input type="text" placeholder="Name" id="" />
        <input type="email" placeholder="Email" id="" />
        <textarea id="" cols="30" rows="10" placeholder="Message To PRANKUSH..."></textarea>
        <button type="submit">Submit</button>

    </motion.form>
    </section>
  )
}

export default Contact