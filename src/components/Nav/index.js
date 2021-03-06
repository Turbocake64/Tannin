import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Empinfo from '../Empinfo'
import './style.css'

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  }

  updateWidth = () => {
    const newState = { width: window.innerWidth }
    if (this.state.open && newState.width > 991) {
      newState.open = false
    }
    this.setState(newState)
  }

  toggleNav = () => {
    this.setState({ open: !this.state.open })
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWidth)
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/* <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}

        <div className={`${this.state.open ? '' : 'collapse '}navbar-collapse`} id="navbarNav">
          <Empinfo
            useId={this.state.useId}
            useEmail={this.state.empuseEmail}
            usefirstName={this.state.empUserFirstName}
            uselastName={this.state.empUserLastName}
            userestaurantName={this.state.empUserRestaurantName}
            showMe4={this.state.showMe4}
            hideShow4={this.hideShow4}
            handleLogout={this.handleLogout}
            greet={this.state.greet}
          />
          <button>
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === '/home' ? 'nav-link active' : 'nav-link'}
              to="/home"
            >
              Home
            </Link>
          </button>
          <Link
            onClick={this.toggleNav}
            className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            to="/"
          >
            Search
          </Link>
          <Link
            onClick={this.toggleNav}
            className={window.location.pathname === '/saved' ? 'nav-link active' : 'nav-link'}
            to="/saved"
          >
            Saved
          </Link>
          <Link
            onClick={this.toggleNav}
            className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            to="/"
          >
            Back to login page
          </Link>
        </div>
      </nav>
    )
  }
}

export default Nav
