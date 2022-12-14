import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
	return (
		<main className="container">
			<Router>
				<Routes>
					<Route to="/" element={<Home />} />
					<Route to="/api/users" element={<Register />} />
					<Route to="/api/users/login" element={<Login />} />
				</Routes>
			</Router>
		</main>
	)
}

export default App
