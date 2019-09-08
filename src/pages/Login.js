import React, { Component } from 'react'
import Loader from '../components/Loader'
import './Login.css'

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        loader: false
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login() {

    }

    render() {
        if (this.state.loader) {
            return <Loader/>
        } else {
            return (
                <form id="login" onSubmit={this.login}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button type="submit">Login</button>
                </form>
            )
        }
    }
}
