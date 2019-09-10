import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Routes from './routes'
import Login from './pages/Login'

import { store } from './redux/store/index'

function App() {

    const isUserLoggedin = store.getState().isLogged

    if (!isUserLoggedin) {
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
