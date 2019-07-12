import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'

function SignupLoginForm ({ showMe, hideShow, restaurant, firstName, lastName, email, password, loginemail, loginpassword, handleSubmitInputChange, handleSignupFormSubmit, handleLoginInputChange, handleLoginFormSubmit, signupMessage, loginMessage }) {
  return (
    <div>
      <div className="loginsignupbtnmainwrap">
        <div className="loginsignupbtnmainwrap2">
          <button className="loginsignupbtnmain" onClick={() => hideShow()}>Log In/ Sign Up</button>
        </div>
      </div>
      {showMe
        ? <div className="overlay">
          <div className="tannintextwrap">Tannin</div>
          <div className="wrap1">
            <div className="wrap2">
              <div className="wrap3">
                <div className="signUpwrap">
                  <div className="signuptext"> Sign Up</div>
                  <form>
                    <div className="form-group">
                      <div>
                        <label>
                          <strong>Restaurant</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            // autoComplete="off"
                            id=""
                            type="text"
                            value={restaurant}
                            // placeholder="Restaurant"
                            name="restaurant"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <br/>
                        <label>
                          <strong>First Name</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            autoComplete="off"
                            id=""
                            type="text"
                            value={firstName}
                            // placeholder="First Name"
                            name="firstName"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>

                        <label>
                          <strong>Last Name</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="text"
                            value={lastName}
                            // placeholder="Last Name"
                            name="lastName"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label>
                          <strong>Email</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="email"
                            value={email}
                            // placeholder="Email Address"
                            name="email"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>

                        <label>
                          <strong>Password</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="password"
                            value={password}
                            // placeholder="Password"
                            name="password"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sigupmessage"><h2 className="message">{signupMessage}</h2></div>
                    <div className="pull-right">

                      <button
                        onClick={handleSignupFormSubmit}
                        type="submit"
                        className="submitbtnsignup"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="loginwrap">
                  <br/>
                  <div className="logintext"> Log In</div>
                  <form>
                    <div className="form-group">
                      <div>

                        <label>
                          <strong>Email</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="email"
                            value={loginemail}
                            // placeholder="Email Address"
                            name="loginemail"
                            onChange={handleLoginInputChange}
                            required
                          />
                        </div>

                        <label>
                          <strong>Password</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="password"
                            value={loginpassword}
                            // placeholder="Password"
                            name="loginpassword"
                            onChange={handleLoginInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="loginmessage"><h2 className="message">{loginMessage}</h2></div>
                    <div className="pull-right">

                      <button
                        onClick={handleLoginFormSubmit}
                        type="submit"
                        className="loginbtnsignup"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <br/>
              </div>
              <div className="btnwrap">
                {/* <button><Link to="/admin" className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}>admin</Link></button> */}
                <button className="backtohome" onClick={() => hideShow()}>
                  <i className="fa fa-chevron-circle-left 2x" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </div>
  )
}

export default SignupLoginForm
