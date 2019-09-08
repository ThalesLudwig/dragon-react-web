import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Routes from './routes'
import Login from './pages/Login'

function App() {

	const isUserLoggedin = false

	if (isUserLoggedin) {
		return (
			<Login />
		)
	} else {
		return (
			<BrowserRouter>
				<Header/>
				<Routes/>
			</BrowserRouter>
		)
	}
}

export default App
