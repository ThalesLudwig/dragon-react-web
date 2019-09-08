import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dragon from './pages/Dragon'
import Login from './pages/Login'

function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/dragon/:id" component={Dragon} exact />
            <Route path="/dragon" component={Dragon} exact />
        </Switch>
    )
}

export default Routes