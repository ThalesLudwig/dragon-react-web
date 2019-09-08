import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import home from '../assets/home.svg'
import user from '../assets/user.svg'
import add from '../assets/add.svg'

import * as Actions from '../redux/actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Header extends Component {

    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout() {
        const confirm = window.confirm('Are you sure you wish to logout?')
        if (confirm) {
            this.props.logUser(false)
            window.location.href = '/'
        }
    }

    render() {
        return (
            <header id="main-header">
                <div className="header-content">
                    <Link to="/">
                        <img src={home} alt="home" width="30px" height="30px"/>
                    </Link>
                    <Link to="/dragon">
                        <img src={add} alt="add" width="30px" height="30px"/>
                    </Link>
                    <button type="button" onClick={() => this.logout()}>
                        <img src={user} alt="user" width="30px" height="30px"/>
                    </button>
                </div>
            </header>
        )
    }

}

const mapStateToProps = state => ({
    isLogged: state.isLogged
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
