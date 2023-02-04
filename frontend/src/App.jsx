import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header';
import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';

function App()
{
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
