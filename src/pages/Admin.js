import React, { Component } from 'react'
import Restowine from '../components/Restowine'
import Employees from '../components/Employees'
import Userinfo from '../components/Userinfo'
import Addemployee from '../components/Addemployee'
import FeedbackModal from '../components/FeedbackModal'
import Navbar from '../components/Navbar'
import API from '../utils/API'
import { Container } from '../components/Grid'
import { List } from '../components/List'
import { Link } from 'react-router-dom'
import './style.css'

class Admin extends Component {
  state = {
    restaurants: [],
    employeesList: [],
    winesMaster: [],
    wineCollections: [],

    showMe: false,
    showMe2: false,
    showMeUserInfo: false,
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

  componentDidMount () {
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

  // Hide Show Functions

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

  hideShow2 = () => {
    const newState = { ...this.state }
    newState.showMe2 = !newState.showMe2
    // newState.scale = this.state.scale > 1 ? 1 : 1.5

    this.setState(newState)
  }

  hideShowEmployeeData = id => {
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

  hideShowUserInfo = () => {
    const newState = { ...this.state }
    newState.showMeUserInfo = !newState.showMeUserInfo
    this.setState(newState)
  }

  hideShowFeedback = () => {
    const newState = { ...this.state }
    newState.showMeFeedback = !newState.showMeFeedback
    this.setState(newState)
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
    console.log('getSavedWine user.restaurantId ----------')
    console.log(this.state.user.restaurantId)
    console.log('----------')
    const admin = { restaurantId: this.state.user.restaurantId }
    API.getSavedWine(admin)
      .then(res => {
          console.log('getSavedWine res.data._id ----------')
          console.log(res.data._id)
          console.log('----------')
          console.log('getSavedWine res.data----------')
          console.log(res.data)
          console.log('----------')
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
  handleAddEmployeeFormSubmit = event => {
    event.preventDefault()
    this.addEmployee()
    // this.hideShow2()
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
    console.log('employeeData ----------')
    console.log(employeeData)
    console.log('----------')
    API.addEmployee(employeeData).then((res) => {
      console.log('ADD Employee ----------')
      console.log(res.data.employee)
      console.log(res.data.restaurant)
      console.log('----------')
      if (res.data === 'Employee already exists') {
        // alert(res.data)
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
    console.log('id ----------')
    console.log(id)
    const deleteWine = { id: id, restaurantId: this.state.user.restaurantId }
    console.log(deleteWine)
    API.deleteWine(deleteWine).then(res => this.componentDidMount())
  }

  handleEmployeeDelete = id => {
    const deleteEmp = { id: id, restaurantId: this.state.user.restaurantId }
    console.log('deleteEmp ----------')
    console.log(deleteEmp)
    console.log('----------')
    API.deleteEmployee(deleteEmp).then(res =>
      this.componentDidMount()
    )
  }

  render() {
    return (
      <Container>

        {/* MODAL ----------------------- */}
        <Addemployee
          handleAddEmployeeChange={this.handleAddEmployeeChange}
          handleAddEmpolyeeFormSubmit={this.handleAddEmployeeFormSubmit}
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
          restaurant={this.state.restaurant}
          name={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          url='http://localhost:3000/admin'
          showMe={this.state.showMeFeedback}
          hideShow={this.state.hideShowFeedback}
        ></FeedbackModal>
        {/* MODAL ----------------------- */}

        <div className="navBar">
          <Navbar
            userId={this.state._id}
            userFirstName={this.state.firstName}
            userLastName={this.state.lastName}
            userAdmin={this.state.isAdmin}
            restaurantName={this.state.restaurantName}
            handleLogout={this.handleLogout}
            hideShowUserInfo={this.hideShowUserInfo}
            hideShowFeedback={this.hideShowFeedback}
          >
          </Navbar>

          <Userinfo
            user={this.state.user}
            id={this.state.user._id}
            email={this.state.user.email}
            firstName={this.state.user.firstName}
            lastName={this.state.user.lastName}
            restaurantName={this.state.user.restaurantName}
            showMe={this.state.showMeUserInfo}
            hideShow={this.hideShowUserInfo}
            handleLogout={this.handleLogout}
          ></Userinfo>
        </div>

        <div className="admin-main-wrapper">

          {/* -----------------WINE COLUMN------------------- */}
          <div className="admin-main-column">
            <div className="admin-column-title-wrap">
              <div className="admin-column-header">
                <div className="admin-header-text">
                  {this.state.user.restaurantName}'s Wine List:
                </div>
                <div classNamn="admin-header-btn">
                  <Link to="/wines">
                    <button className="addwinebtnmain">

                      <i className="fas fa-wine-bottle" />
                      Add new wines

                    </button>
                  </Link>
                </div>
              </div>
            </div>
              
                <div className="admin-column-wrap">
                  <div className="employeeColWrap1">
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
          <div className="admin-main-column">
            <div className="admin-column-title-wrap">
              <div className="admin-column-header">
                <div className="admin-header-text">
                  {this.state.user.restaurantName}'s Employees:
                </div>
                <div classNamn="admin-header-btn">
                  <button className="admin-add-employee-btn" onClick={() => this.hideShow2()}>
                    Add an Employee<i className="fas fa-user-plus" />
                  </button>
                </div>
              </div>
            </div>

            <div className="admin-column-wrap">
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
                        showMe={this.state.showMeEmp}
                        hideShow={this.hideShowEmployeeData}
                        handleEmployeeDelete={this.handleEmployeeDelete}
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
      </Container>
    )
  }
}

export default Admin
