import React from 'react'
import {AiFillAccountBook,AiFillInstagram,AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <div>
            <h2>
                RUBIKS CUBE SELLING
            </h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam iure quis magnam?
            </p>

            <br />
            <em>Selling the smoothest cubes</em>
            <br />
            <br />
            <strong>
                ALL rights reserved @PRANKUSH
            </strong>


        </div>
            <aside>
                <h4>FOLLOW ME</h4>
                <a href="https://prankushgiri.netlify.app" target="_blank">
                    <AiFillAccountBook />
                </a>
                <a href="https://instagram.com/prankush1999" target="_blank" >
                    <AiFillInstagram />
                </a>
                <a href="http://github.com/prankush-tech" target="_blank" >
                    <AiFillGithub />
                </a>
            </aside>
    </footer>
  )
}

export default Footer