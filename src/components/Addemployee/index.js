import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'

function Addemployee ({ showMe2, hideShow2, name, lastName, email, password, handleAddEmployeeChange, handleAddEmpolyeeFormSubmit }) {
  return (
    <div>
      {showMe2
        ? <div className="overlay1">
          <div className="wrapper1">
            <div className="wrapper2">
              <div className="wrapper3">
                <div>
                  <div className="newempformtext"> New Employee Form</div>
                  <form>
                    <div className="form-group">
                      <div>
                        <label>
                          <strong>Name</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="text"
                            value={name}
                            // placeholder="First Name"
                            name="name"
                            onChange={handleAddEmployeeChange}
                            required
                          />
                        </div>

                        <label>
                          <strong>Last Name</strong>
                        </label>
                        <div>
                          <input
                            className="formcontrol"
                            id=""
                            type="text"
                            value={lastName}
                            // placeholder="Last Name"
                            name="lastName"
                            onChange={handleAddEmployeeChange}
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
                            className="formcontrol"
                            id=""
                            type="email"
                            value={email}
                            // placeholder="Email Address"
                            name="email"
                            onChange={handleAddEmployeeChange}
                            required
                          />
                        </div>

                        <label>
                          <strong>Password</strong>
                        </label>
                        <div>
                          <input
                            className="formcontrol"
                            id=""
                            type="password"
                            value={password}
                            // placeholder="Password"
                            name="password"
                            onChange={handleAddEmployeeChange}
                            required
                          />
                        </div>
                      </div>

                    </div>

                    <div className="btnwrap1awrap">
                      <button onClick={handleAddEmpolyeeFormSubmit} type="submit" className="btnwrap1addemp">
                        Submit
                      </button>
                      <button className="btnwrap1addemp" onClick={() => hideShow2()}>
                        Close
                      </button>
                    </div>

                  </form>
                </div>
                <br />

                {/*<div>*/}
                {/*  <Link to="/employeepage" className={window.location.pathname === "/employeepage" ? "nav-link active" : "nav-link"}>*/}
                {/*    <button>Employee page</button>*/}
                {/*  </Link>*/}
                {/*</div> */}
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </div>
  )
}

export default Addemployee
