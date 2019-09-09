import React, { Component } from 'react'
import api from '../services/api'
import Loader from '../components/Loader'
import Moment from 'moment';
import './Dragon.css'

export default class Dragon extends Component {

    state = {
        id: null,
        name: '',
        type: '',
        createdAt: '',
        loader: false
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({ loader: true })
            await this.setState({ id: this.props.match.params.id })
            await this.populate()
            this.setState({ loader: false })
        }
    }

    async populate() {
        const dragon = await api.get(`dragon/${this.state.id}`)
        this.setState({ name: dragon.data.name, type: dragon.data.type, createdAt: dragon.data.createdAt })
    }

    formatDate() {
        if (this.props.match.params.id) {
            return Moment(this.state.createdAt).format('DD/MM/YYYY')
        } else {
            return ''
        }
    }

    update = async e => {
        e.preventDefault()
        this.setState({ loader: true })
        await api.put(`dragon/${this.state.id}`, { name: this.state.name, type: this.state.type })
        this.props.history.push('/')
    }

    create = async e => {
        e.preventDefault()
        this.setState({ loader: true })
        await api.post('dragon', { name: this.state.name, type: this.state.type })
        this.props.history.push('/')
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (this.state.loader) {
            return <Loader/>
        } else {

            if (this.props.match.params.id) {
                return (
                    <form id="dragon" onSubmit={this.update}>
                        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
                        <input type="text" name="type" placeholder="Type" onChange={this.handleChange} value={this.state.type} />
                        <input type="text" name="createdAt" placeholder="Created at" readOnly value={this.formatDate()} />
                        <button type="submit">Update</button>
                    </form>
                )
            } else {
                return (
                    <form id="dragon" onSubmit={this.create}>
                        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                        <input type="text" name="type" placeholder="Type" onChange={this.handleChange} />
                        <button type="submit">Create</button>
                    </form>
                )
            }


            
        }
    }
}
