import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import ContactsCrud from '../components/contacts/ContactsCrud'

export default props => 
    <Switch>
        <Route path='/' component={ContactsCrud} />
        <Redirect from='*' to='/' />
    </Switch>