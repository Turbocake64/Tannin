import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar ({ showMe4, userAdmin, useEmail, userId, hideShow4, userFirstName, userLastName, restaurantName, handleLogout }) {
  return (
    <div className="navbar">
      <div className="brandTitle">Tannin</div>
      <button onClick={() => hideShow4(userId)} className="userNavBtn">{userFirstName} {userLastName}'s Data</button>
      <button>Feedback</button>
      <Link to="/employeepage">
        <button>Employee View</button>
      </Link>
      <Link to="/admin">
        <button>{restaurantName} Admin</button>
      </Link>
      <div className="btn1logoutwrap">
        <button className="btnlogout" onClick={() => handleLogout()}>
          Logout <i className="fas fa-sign-out-alt" />
        </button>
      </div>
      {showMe4
        ? <div className="overlay8" onClick={() => hideShow4(useId)}>
          <div className="userinfowrapper1">
            <div className="userinfowrapper2">
              <div className="userinfowrapper3">
                <div>
                  <div className="btnwrap1bclose" />
                  <div className="userformtext">
                    <div className="infodetails">Id No: {useId}</div>
                    <br />

                    <div className="infodetails">Restaurant: {userestaurantName}</div>
                    <br />

                    <div className="infodetails">Admin: {usefirstName + " " + uselastName}</div>
                    <br />

                    <div className="infodetails">Email: {useEmail}</div>
                  </div>

                  <div className="form-group">
                    <div className="btn1logoutwrap">
                      <button className="btn1logout" onClick={() => handleLogout()}>
                        Logout <i className="fas fa-sign-out-alt" />
                      </button>
                    </div>
                    <div>
                    </div>
                  </div>
                  <br />

                </div>
                <br />

              </div>
            </div>
          </div>
        </div>
        : null
      }
    </div>
  )
}

export default Navbar
