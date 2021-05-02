import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ROUTE } from '../../../types'
import { Home } from '../../pages/Home'
import { NavBar } from '../../features/NavBar'
import { EntityDetails } from '../../pages/EntityDetails'

export const RouterProvider: React.FC = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path={ROUTE.HOME} component={Home} />
      <Route exact path={ROUTE.READ_SHOW} component={EntityDetails} />
      <Route exact path={ROUTE.READ_ACTORS} component={EntityDetails} />
      <Route exact path={ROUTE.READ_MOVIE} component={EntityDetails} />
    </Switch>
  </Router>
)
