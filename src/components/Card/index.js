import React from 'react'
import './style.css'

function Card ({ title, children }) {
  return (
    <div className="card1">
      <div className="card-header">
        <h3>
          <strong>
            {title}
          </strong>
        </h3>
      </div>
      <div className="cardbody">{children}</div>
    </div>
  )
}

export default Card
