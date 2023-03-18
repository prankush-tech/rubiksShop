import React from 'react';
import me from '../../assets/admin.jpg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminUsers } from '../../redux/actions/admin';
import Loader from '../layout/Loader';

const Users = () => {


	const dispatch = useDispatch();

	const { loading, users } = useSelector((state) => state.admin);

	useEffect(
		() => {
			dispatch(getAdminUsers());
		},
		[ dispatch ]
	);

	return (
		<section className="tableClass">
			{loading === false ? (
				<main>
					<table>
						<thead>
							<tr>
								<th>User ID</th>
								<th>NAME</th>
								<th>Photos</th>
								<th>Role</th>
								<th>Since</th>
							</tr>
						</thead>

						<tbody>
							{users &&
								users.map((i) => {
									return (
										<tr key={i._id}>
											<td>#{i._id}</td>
											<td>{i.name}</td>
											<td>
												<img src={i.photo} alt="User" />
											</td>
											<td>{i.role}</td>
											<td>{i.createdAt.split('T')[0]}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</main>
			) : (
				<Loader />
			)}
		</section>
	);
};

export default Users;
