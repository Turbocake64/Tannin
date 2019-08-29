import React from 'react'
// import { Link } from 'react-router-dom'
import { ListItem } from '../List'
import './style.css'

function Employees ({ handleEmployeeDelete, empScores, id, firstName, lastName, password, empId, hideShow, showMe, empfirstName, emplastName, empEmail }) {
  console.log(empScores)
  return (
    <div>
      <ListItem>
        <div className="listitemdiv4">
          <div className="empnamediv">
            <div className="empnamecollectionname1">
              {/* <div className="fontitalicsmall">{name}</div> */}
              <div>
                <button className="empnamebtn1" onClick={() => hideShow(id)}>{firstName} {lastName}</button>
              </div>
              <div>
                <button className="empdelbtn" onClick={() => handleEmployeeDelete(id)}><i
                  className="fas fa-user-minus lg"/></button>
              </div>
            </div>
            {/* <div><Link to="/quiz" className="nav-link"><button>Quiz Page</button></Link></div> */}

            <div>
              {showMe
                ? <div onClick={() => hideShow(empId)} className="overlay7">
                  <div className="empinfo1">
                    <div className="empinfo2">
                      <div className="empinfo3">
                        <div className="infoempwrap">
                          <div className="infodetails">Id No: {empId}</div>
                          <div className="infodetails">First Name: {empfirstName}</div>
                          <div className="infodetails">Last Name: {emplastName}</div>
                          <div className="infodetails">Password: {password}</div>
                          <div className="infodetails">Email: {empEmail}</div>
                          <div className="infodetails">Test Scores:</div>
                          {empScores.map(score => {
                            return (
                              <div>
                                <li className="travelcompany-input">
                                  <span className="input-label">Wine: {score.wine}</span> =
                                  <span className="input-label"> {score.score}%</span>
                                </li>
                              </div>
                            )
                          })
                          }
                          {console.log('hoooooy')}
                          {console.log(empScores)}
                        </div>

                        <br />

                      </div>
                      <div className="btnwrap">
                      </div>
                    </div>
                  </div>
                </div>
                : null
              }
            </div>
          </div>
        </div>
      </ListItem>
    </div>
  )
}

export default Employees
