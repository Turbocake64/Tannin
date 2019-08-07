import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar ({ showMe4, userAdmin, useEmail, userId, hideShowEmpInfo, hideShowFeedback, userFirstName, userLastName, restaurantName, handleLogout }) {
  return (

    <div className='navbar'>
      <div className='brandTitle'>Tannin | {restaurantName}</div>
      <button onClick={() => hideShowEmpInfo(userId)} className='userNavBtn NavBtn'>{userFirstName} {userLastName}'s Data </button>
      <button onClick={() => hideShowFeedback()}className='NavBtn'>Feedback</button>
      <button className='NavBtn'><Link
        to='/employeepage'
        onClick={window.location.reload}
      >
        Employee View
      </Link></button>
      <button className='NavBtn'>
        <Link
          to='/admin'
          onClick={window.location.reload}
        >
          {restaurantName} Admin
        </Link>
      </button>
      <div className='btn1logoutwrap'>
        <button className='btnlogout NavBtn' onClick={() => handleLogout()}>Logout <i className='fas fa-sign-out-alt'></i></button>
      </div>
      {/* {showMe4 ?
        <div className='overlay8' onClick={() => hideShow4(useId)}>
          <div className='userinfowrapper1'>
            <div className='userinfowrapper2'>
              <div className='userinfowrapper3'>
                <div>
                  <div className='btnwrap1bclose'>
                  </div>
                  <div className='userformtext'>
                    <div className='infodetails'>Id No: {useId}</div>
                    <br></br>
                    <div className='infodetails'>Restaurant: {userestaurantName}</div>
                    <br></br>
                    <div className='infodetails'>Admin: {usefirstName + ' ' + uselastName}</div>
                    <br></br>
                    <div className='infodetails'>Email: {useEmail}</div>
                  </div>

                  <div className='form-group'>

                    <div className='btn1logoutwrap'>
                      <button className='btn1logout' onClick={() => handleLogout()}>Logout <i className='fas fa-sign-out-alt'></i></button>
                    </div>
                    <div>
                    </div>
                  </div>
                  <br></br>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        : null
      } */}

    </div>
  )
}

export default Navbar
