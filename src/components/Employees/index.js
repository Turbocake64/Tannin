import React from 'react'
// import { Link } from 'react-router-dom'
import { ListItem } from '../List'
import './style.css'

function Employees({ handleEmployeeDelete, empScores, id, firstName, lastName, password, empId, hideShow, showMe, empfirstName, emplastName, empEmail }) {
  console.log(empScores)
  return (
    <div>
      <ListItem>
        <div className="admin-employee-card">
          <div className='admin-employee-name'>
            <div>
            {firstName} {lastName}
            </div>
            <div>
                <button className="admin-employee-delete-btn" onClick={() => handleEmployeeDelete(id)}><i className="fas fa-minus-circle"/>
                </button>
              </div>
          </div>
          <div className-='admin-employee-btns'>
            <button className="admin-employee-data-btn" onClick={() => hideShow(id)}> Employee Data</button>
          </div>
          <div>
            {showMe
              ? <div className="modal-overlay" onClick={() => hideShow(empId)}>
                <div className="info-modal-wrap">
                  <div className="info-modal-container">
                    <div className="info-modal-center">
                      <div className="info-modal-inner">
                        <div className="info-details">
                          <div className='info-spec-key'>
                            Employee Name:
                          </div>
                          <div className='info-spec-value'>
                            {emplastName}, {empfirstName}
                          </div>
                        </div>
                        <div className="info-details">
                          <div className='info-spec-key'>
                            Registered Email:
                          </div>
                          <div className='info-spec-value'>
                            {empEmail}
                          </div>
                        </div>
                        {empScores ?
                          <div className="info-details-block">
                            <div className='info-spec-key'>
                              Test Scores:
                          </div>
                            <div className='info-spec-value-block'>
                              {empScores.map(score => {
                                return (
                                  <div>
                                    <li className="travelcompany-input">
                                      <span className="input-label">{score.wine}</span> :
                                  <span className="input-label"> {score.score}%</span>
                                    </li>
                                  </div>
                                )
                              })
                              }
                            </div>
                          </div>
                        :
                          <div className="info-details-block">
                            <div className='info-spec-key'>
                              Test Scores:
                            </div>
                            <div className='info-spec-value-block'>
                              Test.
                            </div>
                          </div>
                        }
                      </div>

                      <br />

                    </div>
                    <div className="btnwrap">
                      <button className="btnwrap1buserclose" onClick={() => hideShow(id)}>
                        <i className="fas fa-times-circle" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              : null
            }
          </div>
        </div>
      </ListItem>
    </div>
  )
}

export default Employees
