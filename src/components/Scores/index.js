import React from 'react'
// import { Link } from 'react-router-dom'
import { ListItem } from '../List'
import './style.css'

function ScoreSummary ({ newScores, hideShowSummary, showMeSummary }) {
  return (
    <div>
      <ListItem>
        <div className="listitemdiv3">
          <div className="emppagewinecollectiondiv1">
            {/* <div className="font-italic">{id}</div> */}
            <div>
              {showMeSummary
                ? <div onClick={() => hideShowSummary()} className="overlay11">
                  <div className="scoreinfo1">
                    <div className="scoreinfo2">
                      <div className="scoreinfo3">
                        <div className="infoscorewrap">
                          <div className="infodetails">Test Scores:</div>
                          {newScores.map(score => {
                            return (
                              <div>
                                <li className='travelcompany-input'>
                                  <span className='input-label'>{score.wine}: {score.score}%</span>
                                </li>
                              </div>
                            )
                          })
                          }
                          {console.log('hoooooy')}
                          {console.log(newScores)}
                          {/* <div className="infodetails">Email: {empScores}</div> */}
                        </div>

                        <br />

                      </div>
                      <div className="btnwrap">
                        {/* <button><Link to="/admin">Others</Link></button> */}
                        {/* <button className="btnwrap1buserclose" onClick={() => hideShowEmp(empId)}><i className="fas fa-times-circle"></i></button> */}
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

export default ScoreSummary
