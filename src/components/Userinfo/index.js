import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'

function Userinfo ({ showMe3, useEmail, useId, hideShow3, usefirstName, uselastName, userestaurantName, handleLogout }) {
  return (
    <div>
      {showMe3 ?
        <div className="overlay8" onClick={() => hideShow3(useId)}>
          <div className="userinfowrapper1">
            <div className="userinfowrapper2">
              <div className="userinfowrapper3">
                <div>
                  {/* <div className="btnwrap1bclose"> */}
                  {/*   <button className="btnwrap1buserclose" onClick={() => hideShow3(useId)}><i className="fas fa-times-circle" /></button> */}
                  {/* </div> */}
                  <div className="userformtext">
                    {/* <div className="infodetails">Id No: {useId}</div> */}
                    {/* <br /> */}
                    <div className="infodetails">Restaurant: {userestaurantName}</div>
                    {/* <br /> */}
                    <div className="infodetails">Admin: {usefirstName + ' ' + uselastName}</div>
                    {/* <br /> */}
                    <div className="infodetails">Email: {useEmail}</div>
                  </div>

                  <div className="form-group">
                    <div className="btn1logoutwrap">
                      <button className="btn1logout" onClick={() => handleLogout()}>
                        Logout <i className="fas fa-sign-out-alt" />
                      </button>
                    </div>
                  </div>

                  <br />
                  {/* <div className="btn1logoutwrap"> */}
                  {/*   <button className="btn1logout" onClick={() => handleLogout()}> */}
                  {/*     Logout <i className="fas fa-sign-out-alt" /> */}
                  {/*   </button> */}
                  {/* </div> */}
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

export default Userinfo
