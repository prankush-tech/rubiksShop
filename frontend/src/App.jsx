import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder.jsx';
import PaymentSuccess from './components/cart/PaymentSuccess.jsx';
import Profile from './components/profile/Profile';
import Login from './components/login/Login.jsx';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import Orders from './components/admin/Orders';
import About from './components/about/About';
import NotFound from './components/layout/NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/user';
import toast, { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from 'protected-route-react';

import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/confirmOrder.scss';
import './styles/paymentSuccess.scss';
import './styles/login.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderDetails.scss';
import './styles/dashboard.scss';
import './styles/about.scss';

function App() {
	const dispatch = useDispatch();
	const { error, message, isAuthenticated } = useSelector((state) => state.auth);
	console.log(isAuthenticated);

	useEffect(
		() => {
			dispatch(loadUser());
		},
		[ dispatch ]
	);

	useEffect(
		() => {
			if (error) {
				toast.error(error);
				dispatch({
					type: 'clearError'
				});
			}
			if (message) {
				toast.success(message);
				dispatch({
					type: 'clearMessage'
				});
			}
		},
		[ dispatch, error, message ]
	);

	return (
		
		<Router>
			<Header isAuthenticated={isAuthenticated} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/about" element={<About />} />




				<Route
					path="/login"
					element={
						<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
							<Login />
						</ProtectedRoute>
					}
				/>





				<Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
					<Route path="/me" element={<Profile />} />
					<Route path="/shipping" element={<Shipping />} />
					<Route path="/confirmOrder" element={<ConfirmOrder />} />
					<Route path="/order/:id" element={<OrderDetails />} />
					<Route path="/myorders" element={<MyOrders />} />
				</Route>




				<Route path="/paymentSuccess" element={<PaymentSuccess />} />





				<Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route path="/admin/users" element={<Users />} />
					<Route path="/admin/orders" element={<Orders />} />
				</Route>

				<Route path="/*" element={<NotFound />} />
			</Routes>

			<Toaster />
			<Footer />
		</Router>
	);
}

export default App;
