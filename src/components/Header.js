import React from 'react'
// TODO - add proptypes

const Header = props => {
  let Greeting
  if (props.user === null) {
    Greeting = <p>Hello guest</p>
  } else if (props.user.firstName) {
    Greeting = (
      <div>
        <div>
          <strong>{props.user.restaurantName} | Hello {props.user.firstName}</strong>
        </div>
      </div>
    )
  }
  return (
    <div className="Header">
      {Greeting}
    </div>
  )
}

export default Header
