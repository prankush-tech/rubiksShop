import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Contact from './components/contact/Contact';
import R3F1 from './components/r3f/r3f1';
import R3F2 from './components/r3f/R3F2';
import R3F3 from './components/r3f/R3F3';

import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';



function App()
{
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cube1" element={<R3F1/>} />
				<Route path="/cube2" element={<R3F2/>} />
				<Route path="/cube3" element={<R3F3/>} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
