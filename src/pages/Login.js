import React, { Component } from 'react'
import Loader from '../components/Loader'
import './Login.css'
import * as Actions from '../redux/actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Login extends Component {

    state = {
        username: '',
        password: '',
        loader: false
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = e => {
        e.preventDefault()
        if (this.isUserAuth()) {
            this.props.logUser(true)
            window.location.href = '/'
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
            if (this.props.isLogged) {
                window.location.href = '/'
                return null
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

const mapStateToProps = state => ({
    isLogged: state.isLogged
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)