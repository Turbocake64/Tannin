import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Wines from './pages/Wines'
import Quiz from './pages/Quiz'
import EmployeePage from './pages/EmployeePage'

function App () {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/wines" component={Wines} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/employeepage" component={EmployeePage} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App
