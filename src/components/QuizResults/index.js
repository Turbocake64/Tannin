import React from 'react'
import { Link } from 'react-router-dom';
// import './style.css'

function QuizResults ({ showMe, addScore, hideShow, firstName, lastName, wineName, score, refresh }) {
  return (

    <div>
      {showMe ?
        <div className='overlay9'>
          <div className='empinfowrapper1'>
            <div className='empinfowrapper2'>
              <div className='empinfowrapper3'>
                <div>
                  <div className='btnwrap1bclose'>
                    {/* <button className='btnwrap1b' onClick={() => hideShow4(useId)}>Close</button> */}
                  </div>
                  <div className='empinfoformtext'>

                    <div className='userformtext'>
                      <div className='infodetails'>Hey {firstName} {lastName}</div>
                      <br></br>
                      <div className='infodetails'>Wine Tested: {wineName}</div>
                      <br></br>
                      <div className='infodetails'>Score: {score}%</div>
                    </div>
                  </div>

                  <br></br>
                  <div className='btn1logoutwrap'>
                    <Link
                      to='/employeepage'
                      // onClick={window.location.reload()}

                    >
                      <button className='btn1logout' onClick={() => addScore()}>Commit Results</button>
                    </Link>
                  </div>
                  <div className='btn1logoutwrap'>
                    <button className='btn1logout' onClick={refresh}>Retry</button>
                  </div>

                </div>

                <br></br>
              </div>
            </div>
          </div>
        </div>
        : null
      }

    </div>
  )
}

export default QuizResults
