import React from 'react';
import cubeVideo from './cube.mp4';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<section className="home">
			<div className="hero-heading">
				<h1>ROOKIE</h1>
				<p>Lorem ipsum dolor sit elit. Ratione, eos.</p>
				<a href="#menu">Explore</a>

				<div className="hero-title">
					<motion.h1 initial={{ x: '-100%' }} whileInView={{ x: 0 }} className="hero-title-1">
						RUBIK'S
					</motion.h1>
					<motion.h1 initial={{ x: '-100%' }} whileInView={{ x: 0 }} className="hero-title-2">
						CUBE
					</motion.h1>
				</div>
			</div>

			{/* video */}

			<div className="video-hero">
				<video className="videoSize" src={cubeVideo} alt="video" autoPlay loop muted type="video/mp4" />
			</div>
		</section>
	);
};

export default Home;
