import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Restowine from "../components/Restowine";
import Employees from "../components/Employees";
import Empinfo from "../components/Empinfo";
import Addemployee from "../components/Addemployee";
import FeedbackModal from '../components/FeedbackModal';
// // import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Userinfo from "../components/Userinfo";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";

class Admin extends Component {
  state = {
    restaurants: [],
    employeesList: [],
    winesMaster: [],
    wineCollections: [],

    showMe: false,
    showMe2: false,
    showMeEmpInfo: false,
    showMeFeedback: false,
    showMeEmp: false,
    // text: 'add wine',
    wineId: '',
    wineName: '',
    wineAcidity: '',
    wineAgeability: '',
    wineAlcohol: '',
    wineBody: '',
    wineCountry: '',
    wineDecant: '',
    wineGlassType: '',
    winePairings: [],
    winePrimaryFlavors: [],
    winePronunciation: '',
    wineRegion: '',
    wineSummary: '',
    wineSweetness: '',
    wineTannin: '',
    wineTemp: '',
    wineVarietal: [],

    empId: '',
    empfirstName: '',
    emplastName: '',
    empEmail: '"',
    empScores: [],
    user: '',
    // restaurantId: "",
    name: '',
    lastName: '',
    email: '',
    password: '',
    isAdmin: '',
    // loginemail: "",
    // loginpassword: "",
    loggedIn: true,
    redirectTo: null,

    greet: '',
    userId: '',
    usefirstName: '',
    uselastName: '',
    useEmail: '',
    userestaurantName: ''
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    API.getUser().then(response => {
      console.log('LOGGED IN USER: ', response.data.user)
      if (response.data.user) {
        console.log('THERE IS A USER')
        console.log(response.data)
        this.setState({
          loggedIn: true,
          user: response.data.user,
        })
        this.getSavedWine()
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
        this.props.history.push('/')
      }
    })
  }
  hideShow2 = () => {
    const newState = { ...this.state }
    newState.showMe2 = !newState.showMe2
    // newState.scale = this.state.scale > 1 ? 1 : 1.5

    this.setState(newState)
  }

  hideShow = id => {
    const newState = { ...this.state }
    const wine = this.state.wineCollections.find(wine => wine._id === id)
    newState.wineId = id
    newState.wineName = wine.name
    newState.wineAcidity = wine.acidity
    newState.wineAgeability = wine.ageability
    newState.wineAlcohol = wine.alcohol
    newState.wineBody = wine.body
    newState.wineCountry = wine.country
    newState.wineDecant = wine.decant
    newState.wineGlassType = wine.glassType
    newState.winePairings = wine.pairings
    newState.winePrimaryFlavors = wine.primaryFlavors
    newState.winePronunciation = wine.pronunciation
    newState.wineRegion = wine.region
    newState.wineSummary = wine.summary
    newState.wineSweetness = wine.sweetness
    newState.wineTannin = wine.tannin
    newState.wineTemp = wine.temp
    newState.wineVarietal = wine.varietal
    newState.showMe = !newState.showMe
    newState.scale = this.state.scale > 1 ? 1 : 1.5
    this.setState(newState)
  }

  hideShowEmp = id => {
    const newState = { ...this.state }
    const emp = this.state.employeesList.find(emp => emp._id === id)
    newState.empId = id
    newState.empfirstName = emp.firstName
    newState.emplastName = emp.lastName
    newState.empEmail = emp.email
    newState.empScores = emp.scores
    newState.showMeEmp = !newState.showMeEmp
    this.setState(newState)
    console.log(newState.empScores)
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  handleLogout = () => {
    console.log('logging out')
    API.logOut().then(response => {
      console.log(response.data)
      this.props.history.push('/')
      this.setState({
        loggedIn: false,
        user: null,
      })
      // this.props.history.push('/')
    })
  }

  getSavedWine = () => {
    console.log('////////////////')
    console.log(this.state.user.restaurantId)
    console.log('////////////////')
    const admin = { restaurantId: this.state.user.restaurantId }
    API.getSavedWine(admin)
      .then(res => {
        // console.log(res.data);
        console.log('DEDADAEDAEDAEDAEDDA')
        console.log(res.data._id)
        // console.log(res.data[0]);
        console.log('SAVESTAFF')
        console.log(res.data)
        console.log('SAVESTAFF')
        this.setState({
          employeesList: res.data.Employees.sort((a, b) => a.lastName.localeCompare(b.lastName)),
          wineCollections: res.data.Wines.sort((a, b) => a.name.localeCompare(b.name)),

        })
      }
      )
      .catch(() =>
        this.setState({
          message: 'Wine not available'
        })
      )
  }
  handleAddEmployeeChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  handleAddEmpolyeeFormSubmit = event => {
    event.preventDefault()
    this.addEmployee()
    // this.hideShow2();
  }

  addEmployee = () => {
    // console.log(restaurantId)
    const employeeData = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      restaurantId: this.state.user.restaurantId,
      restaurantName: this.state.user.restaurantName
    }
    console.log('ADDRESNAME?????')
    console.log(employeeData)
    API.addEmployee(employeeData).then((res) => {
      console.log('ADD Employees')
      console.log(res.data.employee)
      console.log(res.data.restaurant)
      if (res.data === 'Employee already exists') {
        alert(res.data)
        this.hideShow2()
      } else {
        // alert(JSON.stringify(res.data))
        this.state.employeesList.unshift(res.data.employee)
        this.setState({
          employeesList: this.state.employeesList
        })
        this.hideShow2()
      }
    })
  }

  handleWineDelete = id => {
    console.log('/////')
    console.log(id)
    const delelteWine = { id: id, restaurantId: this.state.user.restaurantId }
    console.log(delelteWine)
    API.deleteWine(delelteWine).then(res => this.componentDidMount())
  }

  handleEmployeeDelete = id => {
    const deleteEmp = { id: id, restaurantId: this.state.user.restaurantId }
    console.log('??????????????')
    console.log(deleteEmp)
    console.log('??????????????')
    // const deleltData = {id: id, restaurantId: this.state.restaurantId}
    API.deleteEmployee(deleteEmp).then(res =>
      this.componentDidMount()
    )
  }

  hideShowEmpInfo = id => {
    const newState = { ...this.state }
    newState.showMeEmpInfo = !newState.showMeEmpInfo
    this.setState(newState)
  }

  hideShowFeedback = () => {
    const newState = { ...this.state }
    newState.showMeFeedback = !newState.showMeFeedback

    this.setState(newState)
  }

  render() {
    return (
      <Container>
        {/* <Userinfo
          useId={this.state.useId}
          usefirstName={this.state.usefirstName}
          uselastName={this.state.uselastName}
          userestaurantName={this.state.userestaurantName}
          useEmail={this.state.useEmail}
          showMe3={this.state.showMe3}
          hideShow3={this.hideShow3}
          handleLogout={this.handleLogout}
          greet={this.state.greet}
        ></Userinfo> */}


        {/* MODAL ----------------------- */}
        <Addemployee
          handleAddEmployeeChange={this.handleAddEmployeeChange}
          handleAddEmpolyeeFormSubmit={this.handleAddEmpolyeeFormSubmit}
          id={this.state.id}
          restaurant={this.state.restaurant}
          name={this.state.name}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          showMe2={this.state.showMe2}
          hideShow2={this.hideShow2}
        />
        {/* MODAL ----------------------- */}

        {/* MODAL ----------------------- */}
        <FeedbackModal
          id={this.state.id}
          restaurant={this.state.user.restaurant}
          name={this.state.user.firstName}
          lastName={this.state.user.lastName}
          email={this.state.user.email}
          url='http://localhost:3000/admin'
          showMeFeedback={this.state.showMeFeedback}
          hideShowFeedback={this.state.hideShowFeedback}
        ></FeedbackModal>
        {/* MODAL ----------------------- */}

        <div className="navBar">
          <Navbar
            userId={this.state.user._id}
            userFirstName={this.state.user.firstName}
            userLastName={this.state.user.lastName}
            userAdmin={this.state.user.isAdmin}
            restaurantName={this.state.user.restaurantName}
            handleLogout={this.handleLogout}
            hideShowEmpInfo={this.hideShowEmpInfo}
            hideShowFeedback={this.hideShowFeedback}
          >
          </Navbar>

          <Empinfo
            user={this.state.user}
            id={this.state.user._id}
            email={this.state.user.email}
            firstName={this.state.user.firstName}
            lastName={this.state.user.lastName}
            restaurantName={this.state.user.restaurantName}
            showMe={this.state.showMeEmpInfo}
            hideShow={this.hideShowEmpInfo}
            handleLogout={this.handleLogout}
          ></Empinfo>
        </div>

        <div className="wineandemployeewrapper">

          {/* -----------------WINE COLUMN------------------- */}
          <div className="wineCol">
            <div className="wineTitleWrap">
              <div className="wineTitleWrap1">
                <div className="textadmin">Wines</div>
                <div>
                  <Link to="/wines">
                    <button className="addwinebtnmain">
                      <i className="fas fa-wine-bottle" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="wineColWrap">
              <div className="wineColWrap1">
                {this.state.wineCollections.length ? (
                  <List>
                    {this.state.wineCollections.map(wine => (
                      <Restowine
                        key={wine._id}
                        id={wine._id}
                        name={wine.name}
                        handleWineDelete={this.handleWineDelete}
                        showMe={this.state.showMe}
                        hideShow={this.hideShow}
                        wineName={this.state.wineName}
                        wineId={this.state.wineId}
                        wineacidity={this.state.wineacidity}
                        wineAgeability={this.state.wineAgeability}
                        wineAlcohol={this.state.wineAlcohol}
                        wineBody={this.state.wineBody}
                        wineDecant={this.state.wineDecant}
                        wineGlassType={this.state.wineGlassType}
                        winePairings={this.state.winePairings}
                        winePrimaryFlavors={this.state.winePrimaryFlavors}
                        winePronunciation={this.state.winePronunciation}
                        wineRegion={this.state.wineRegion}
                        wineSummary={this.state.wineSummary}
                        wineSweetness={this.state.wineSweetness}
                        wineTannin={this.state.wineTannin}
                        wineTemp={this.state.wineTemp}
                        wineVarietal={this.state.wineVarietal}
                      />
                    ))}
                  </List>
                ) : (
                    <h2 className="text-center">Not Available</h2>
                  )}
              </div>
            </div>
          </div>

          {/* -----------------EMPLOYEES COLUMN------------------- */}
          <div className="employeeCol">
            <div className="empTitleWrap">
              <div className="empTitleWrap1">
                <div className="textadmin">Employees</div>
                <div>
                  <button className="addempbtnmain" onClick={() => this.hideShow2()}>
                    <i className="fas fa-user-plus" />
                  </button>
                </div>
              </div>
            </div>

            <div className="employeeColWrap">
              <div className="employeeColWrap1">
                {this.state.employeesList.length ? (
                  <List>
                    {this.state.employeesList.map(employee => (
                      <Employees
                        key={employee._id}
                        id={employee._id}
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                        password={employee.password}
                        empId={this.state.empId}
                        empfirstName={this.state.empfirstName}
                        emplastName={this.state.emplastName}
                        empEmail={this.state.empEmail}
                        empScores={this.state.empScores}
                        showMeEmp={this.state.showMeEmp}
                        hideShowEmp={this.hideShowEmp}
                        handleEmployeeDelete={this.handleEmployeeDelete}
                      // Button={() => (
                      //   <button
                      //     onClick={() => this.handleEmployeeDelete(employee._id)}
                      //     className="btn btn-danger ml-2"
                      //   >
                      //     Delete
                      // </button>
                      // )}
                      />
                    ))}
                  </List>
                ) : (
                    <h2 className="text-center">Add Employees</h2>
                  )}
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </Container>
    )
  }
}

export default Admin
