import React, { Component } from 'react'
import api from '../services/api'
import Loader from '../components/Loader'
import Card from '../components/Card'
import './Home.css'

export default class Home extends Component {

    state = {
        feed: [],
        loader: false
    }

    async componentDidMount() {
        this.setState({ loader: true })
        await this.populate()
        this.setState({ loader: false })
    }

    async populate() {
        const dragons = await api.get('dragon?sortBy=name&order=asc')
        this.setState({ feed: dragons.data })
    }

    update = id => {
        this.props.history.push(`/dragon/${id}`)
        //api.post(`posts/${id}/like`)
    }

    delete = async id => {
        const confirm = window.confirm('Are you sure you wish to delete this Dragon?')
        if (confirm) {
            this.setState({ loader: true })
            await api.delete(`dragon/${id}`)
            await this.populate()
            this.setState({ loader: false })
        }
    }

    render() {
        if (this.state.loader) {
            return <Loader/>
        } else {
            if (this.state.feed.length > 0) {
                return (
                    <section id="dragon-list">
                        { this.state.feed.map(dragon => (
                            <Card key={dragon.id} dragon={dragon} delete={this.delete} update={this.update}/>
                        )) }
                    </section>
                )
            } else {
                return (
                    <section id="dragon-list">
                        <div id="no-dragon">
                            <p>Dragons have gone extinct!</p>
                            <p>Try adding some!</p>
                        </div>
                    </section>
                )
            }
        }
    }
}
