import React from 'react'
import {AiFillCodepenCircle,AiFillInstagram,AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <div>
            <h2>
                RUBIKS CUBE SELLING
            </h2>
            <p>
               We have 3 products right now.MKOTO , NKOTO and BKOTO. All have glass morphisms material and smooth rotation.
            </p>

            <br />
            <em>Selling the smoothest cubes</em>
            <br />
            <br />
            <strong>
                ALL rights reserved @PRANKUSH_TECH
            </strong>


        </div>
            <aside>
                <h4>FOLLOW ME</h4>
                <a href="https://prankushgiri.netlify.app" target="_blank">
                    <AiFillCodepenCircle />
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