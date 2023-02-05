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
                <a href="prankushgiri.netlify.app">
                    <AiFillAccountBook />
                </a>
                <a href="prankushgiri.netlify.app">
                    <AiFillInstagram />
                </a>
                <a href="prankushgiri.netlify.app">
                    <AiFillGithub />
                </a>
            </aside>
    </footer>
  )
}

export default Footer