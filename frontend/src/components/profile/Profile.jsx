import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader';

const Profile = () => {
	const options = {
		initial: {
			y: '-100%',
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		}
	};

	const dispatch = useDispatch();
	const { loading, user } = useSelector((state) => state.auth);

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<section className="profile">
			{loading === false ? (
				<main>
					<motion.img src={user.photo} alt="user" {...options} />

					<motion.h5 {...options} transition={{ delay: 0.3 }}>
						{user.name}
					</motion.h5>

					{user.role === 'admin' && (
						<motion.div {...options} transition={{ delay: 0.5 }}>
							<Link to="/admin/dashboard">DASHBOARD</Link>
						</motion.div>
					)}

					<motion.div {...options} transition={{ delay: 0.5 }}>
						<Link to="/myorders">ORDERS</Link>
					</motion.div>

					<motion.button onClick={logoutHandler}>LOGOUT</motion.button>
				</main>
			) : (
				<Loader />
			)}
		</section>
	);
};

export default Profile;
