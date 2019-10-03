import React from 'react'
import './style.css'

// This component exports both the List and ListItem components
export const FlexList = ({ children }) => (
  <ul className="flex-list-group">
    {children}
  </ul>
)

export function ListItem ({ children }) {
  return <li className="flex-list-group-item">
    {children}
  </li>
}
