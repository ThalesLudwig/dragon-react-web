import React, { Component } from 'react'
import Loader from '../components/Loader'
import { addUser } from '../redux/actions/index'
import store from '../redux/store/index'
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

    login = async e => {
        e.preventDefault()
        if (this.isUserAuth()) {
            store.dispatch(addUser(true))
            this.props.history.push('/')
        } else {
            alert('Incorrect username or password.')
        }
    }

    isUserAuth() {
        // API call to verify credentials
        if (this.state.username === 'guest' && this.state.password === 'guest') {
            return true
        } else {
            return false
        }
    }

    render() {
        if (this.state.loader) {
            return <Loader/>
        } else {
            if (store.getState().isLogged) {
                this.props.history.push('/')
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
}
