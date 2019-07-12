import React from 'react'
// TODO - add proptypes

const Header2 = props => {
  let Greeting
  if (props.user === null) {
    Greeting = <p>Hello guest</p>
  } else if (props.user.firstName) {
    Greeting = (
      <div>
        <br />
        <div className="header2emppage">
          Hello <strong>{props.user.firstName}</strong>
        </div>
      </div>
    )
  }
  return (
    <div className="Header2">
      {Greeting}
    </div>
  )
}

export default Header2
