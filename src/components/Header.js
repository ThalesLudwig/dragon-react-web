import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import home from '../assets/home.svg'
import user from '../assets/user.svg'
import add from '../assets/add.svg'

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={home} alt="home" width="30px" height="30px"/>
                </Link>
                <Link to="/dragon">
                    <img src={add} alt="add" width="30px" height="30px"/>
                </Link>
                <Link to="/">
                    <img src={user} alt="user" width="30px" height="30px"/>
                </Link>
            </div>
        </header>
    )
}
