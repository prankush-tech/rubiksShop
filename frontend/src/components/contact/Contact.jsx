import React ,{ useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {


const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_47needs', 'template_wvff4bs', form.current, 'vg3eVfmkfk8OfIWlr')
    .then((result) => {
      toast.success("MESSAGE SEND");
        
    }, (error) => {
      toast.error("CHEK FORM AGAIN");
    });
};

  return (
    <section className="contact">

    <motion.form onSubmit={sendEmail} ref={form} >

        <h2>
            CONTACT ME
        </h2>

        <input type="text" placeholder="Name" id="" name='from_name'/>
        <input type="email" placeholder="Email" id="" name='user_email' />
        <textarea id="" cols="30" rows="10" placeholder="Message To PRANKUSH..." name='message' ></textarea>
        <button type="submit" >Submit</button>

    </motion.form>
    </section>
  )
}

export default Contact