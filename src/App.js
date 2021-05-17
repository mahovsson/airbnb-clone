import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';
import Footer from './Footer';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route path='/search'>
						<SearchPage />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
