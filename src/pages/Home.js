import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignupLogin from './SignupLogin'

const DisplayLinks = props => {
  if (props.loggedIn) {
    return (
      // go to the user page
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link" onClick={props.logout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    // stay on the home page
    return (
      <nav className="navbar">
        <Link to="/" className="nav-link" />
      </nav>
    )
  }
}

class Home extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
  }

  render () {
    return (
      <div className="App">
        <DisplayLinks logout={this.logout} loggedIn={this.state.loggedIn} />
        <SignupLogin/>
      </div>
    )
  }
}

export default Home
