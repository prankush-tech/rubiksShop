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
import R3F1 from './components/r3f/R3F1';
import R3F2 from './components/r3f/R3F2';
import R3F3 from './components/r3f/R3F3';
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



function App()
{
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/shipping" element={<Shipping />} />
				<Route path="/confirmOrder" element={<ConfirmOrder />} />
				<Route path="/paymentSuccess" element={<PaymentSuccess />} />
				<Route path="/me" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cube1" element={<R3F1/>} />
				<Route path="/cube2" element={<R3F2/>} />
				<Route path="/cube3" element={<R3F3/>} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
