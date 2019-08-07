import React from 'react'
// import { Link } from 'react-router-dom';
import './style.css'

function FeedbackModal ({ showMe, hideShow, name, lastName, email, url, handleFeedbackSubmit }) {
  return (
    <div>

      {showMe
        ? <div className='overlay1'>
          <div className='wrapper1'>
            <div className='wrapper2'>
              <div className='wrapper3'>
                <div>
                  <div className='newempformtext'> Feedback Form</div>
                  <form>
                    <div className='form-group'>
                      <div />
                      <div>
                        <label>
                          <strong>Name: {name} {lastName}</strong>
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                          <strong>Current Page: {url}</strong>
                        </label>
                      </div>
                      <br></br>
                      <div>
                        <label>
                          <strong>Email: {email} </strong>
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                          <strong>Message:</strong>
                        </label>
                        <div>
                          <input
                            className='formcontrol'
                            id=''
                            type='text'
                            // value
                            placeholder='Give feedback'
                            // name='password'
                            // height="25"
                            // onChange={handleAddEmployeeChange}
                            // required
                          />
                        </div>
                      </div>
                    </div>

                    <div className='btnwrap1awrap'>

                      <button
                        onClick={handleFeedbackSubmit}
                        type='submit'
                        className='btnwrap1addemp'
                      >
                        Submit
                      </button>
                      <button className='btnwrap1addemp' onClick={() => hideShow
                      
}>Close</button>
                    </div>
                  </form>
                </div>

                <br />

                {/* <div><Link
            className={window.location.pathname === "/employeepage" ? "nav-link active" : "nav-link"}
            to="/employeepage"
          ><button>
            Employee page
            </button>
              </Link></div> */}
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </div>)
}

export default FeedbackModal
