import React from 'react'
import { Route, Switch } from 'react-router'
import Game from './components/Game'

export const App = () => (
  <Switch>
    <Route path="/" exact={true} component={Game}/>
  </Switch>
)

export default App
