import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ROUTE } from '../../../types'
import { Home } from '../../pages/Home'
import { ShowDetails } from '../../pages/Show'
import { ActorDetails } from '../../pages/Actor'
import { MovieDetails } from '../../pages/Movie'
import { NavBar } from '../../features/NavBar'
import { CurrentEntity } from '../../pages/CurrentEntity'

export const RouterProvider: React.FC = () => (
  <Router>
    <NavBar/>
    <Switch>
      <Route exact path={ROUTE.HOME} component={Home} />
      <Route exact path={ROUTE.READ_SHOW} component={ShowDetails} />
      <Route exact path={ROUTE.READ_ACTORS} component={ActorDetails} />
      <Route exact path={ROUTE.READ_MOVIE} component={MovieDetails} />
      <Route exact path={ROUTE.CURRENT_ENTITY} component={CurrentEntity} />
    </Switch>
  </Router>
)
