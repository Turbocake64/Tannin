import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'

function Empinfo ({ showMe4, userId, hideShow4, useEmail, usefirstName, uselastName, userestaurantName, handleLogout }) {
  return (
    <div>
      {showMe4 ?
        <div onClick={() => hideShow4(userId)} className="overlay9">
          <div className="empinfowrapper1">
            <div className="empinfowrapper2">
              <div className="empinfowrapper3">
                <div>
                  <div className="btnwrap1bclose">
                    {/* <button className="btnwrap1b" onClick={() => hideShow4(useId)}>Close</button> */}
                  </div>
                  <div className="empinfoformtext">
                    <div className="userformtext">
                      <div className="infodetails">Id No: {userId}</div>
                      <br />

                      <div className="infodetails">Restaurant: {userestaurantName}</div>
                      <br />

                      <div className="infodetails">First Name: {usefirstName}</div>
                      <br />

                      <div className="infodetails">Last Name: {uselastName}</div>
                      <br />

                      <div className="infodetails">Email: {useEmail}</div>
                    </div>
                  </div>
                  <br />

                  <div className="btn1logoutwrap">
                    <button className="btn1logout" onClick={() => handleLogout()}>
                      Logout <i className="fas fa-sign-out-alt" />
                    </button>
                  </div>
                </div>
                <br />

                {/* <div> */}
                {/*   <Link to="/employeepage" className={window.location.pathname === "/employeepage" ? "nav-link active" : "nav-link"}> */}
                {/*     <button>Employee page</button> */}
                {/*   </Link> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        : null
      }
    </div>
  )
}

export default Empinfo
