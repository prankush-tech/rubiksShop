import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>RUBIKS CUBE </h4>
          <p>
            Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture 
          </p>

          <p>
            Explore the various types of Cube and their history. Learn how to solve the Cube and other puzzles. 
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Prankush Giri</h3>
            </div>

            <p>
              I am Prankush Giri, the founder of This Project. Loved creating this project.  
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;