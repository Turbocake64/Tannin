// import React from 'react'
// import { Link } from 'react-router-dom'
// import './style.css'
//
// function Loginsignup ({ showMe, hideShow, restaurant, name, lastName, email, password, loginemail, loginpassword, handleInputChange, handleFormSubmit }) {
//   return (
//     <div>
//       <button className="sampleBtn" onClick={() => hideShow()}>Login/ Sign Up</button>
//       {showMe
//         ? <div className="overlay">
//           <div className="wrap1">
//             <div className="wrap2">
//               <div className="wrap3">
//
//                 <div className="signUpwrap">
//                   <div> Sign Up</div>
//                   <form>
//                     <div className="form-group">
//                       <div>
//                         <label>
//                           <strong>Restaurant</strong>
//                         </label>
//                         <div>
//                           <input
//                             className="form-control"
//                             id=""
//                             type="text"
//                             value={restaurant}
//                             placeholder="Restaurant"
//                             name="restaurant"
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <label>
//                           <strong>Name</strong>
//                         </label>
//                         <div>
//                           <input
//                             // handleInputChange={this.handleInputChange}
//                             // id={this.state.id}
//                             // restaurant={this.state.restaurant}
//                             // name={this.state.name}
//                             // lastName={this.state.lastName}
//                             // email={this.state.email}
//                             // password={this.state.password}
//                             className="form-control"
//                             id=""
//                             type="text"
//                             value={name}
//                             placeholder="First Name"
//                             name="name"
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//
//                         <label>
//                           <strong>Last Name</strong>
//                         </label>
//                         <div>
//                           <input
//                             className="form-control"
//                             id=""
//                             type="text"
//                             value={lastName}
//                             placeholder="Last Name"
//                             name="lastName"
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//                       </div>
//
//                       <div>
//                         <label>
//                           <strong>Email</strong>
//                         </label>
//                         <div>
//                           <input
//                             className="form-control"
//                             id=""
//                             type="email"
//                             value={email}
//                             placeholder="Email Address"
//                             name="email"
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//
//                         <label>
//                           <strong>Password</strong>
//                         </label>
//                         <div>
//                           <input
//                             className="form-control"
//                             id=""
//                             type="password"
//                             value={password}
//                             placeholder="Password"
//                             name="password"
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//                       </div>
//                     </div>
//
//                     <div className="pull-right">
//                       <button
//                         onClick={handleFormSubmit}
//                         type="submit"
//                         className="btn btn-lg btn-danger float-right"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//
//                 <div className="signUpwrap">
//                   <br />
//                   <div> Log In</div>
//                   <form>
//                     <div className="form-group">
//                       <div>
//
//                         <label>
//                           <strong>Email</strong>
//                         </label>
//                         <div>
//                           <input
//                             className="form-control"
//                             id=""
//                             type="email"
//                             value={loginemail}
//                             placeholder="Email Address"
//                             name="loginemail"
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//
//                         <label>
//                           <strong>Password</strong>
//                         </label>
//                         <div>
//                           <input
//                             className="form-control"
//                             id=""
//                             type="password"
//                             value={loginpassword}
//                             placeholder="Password"
//                             name="loginpassword"
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//                       </div>
//                     </div>
//
//                     <div className="pull-right">
//                       <button
//                         onClick={handleFormSubmit}
//                         type="submit"
//                         className="btn btn-lg btn-danger float-right"
//                       >
//                         Login
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//
//                 <br />
//
//               </div>
//               <div className="btnwrap">
//                 <button>
//                   <Link
//                     className={window.location.pathname === '/admin' ? 'nav-link active' : 'nav-link'}
//                     to="/admin"
//                   >
//                     admin
//                   </Link>
//                 </button>
//
//                 <button onClick={() => hideShow()}>CLOSE</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         : null
//       }
//     </div>
//   )
// }
//
// export default Loginsignup
