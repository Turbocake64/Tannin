import React, { Component } from 'react';
import SavedWine from '../components/SavedWine';
import FeedbackModal from '../components/FeedbackModal';
import API from '../utils/API';
import Navbar from '../components/Navbar';
import Header2 from '../components/Header2';
import Empinfo from '../components/Empinfo';
import { Container } from '../components/Grid';
// importing the wine template for testing purposes 
import ScoreSummary from '../components/Scores'
import { List } from '../components/List';
// import { Link } from "react-router-dom";
import "./style.css";

class EmployeePage extends Component {
  state = {
    wineCollections: [],
    ABCollections: [],
    scoreCollection: [],

    showMeSummary: false,
    showMe6: false,
    showMe4: false,
    showMeEmpInfo: false,
    showMe: false,
    user: '',
    loggedIn: true,
    redirectTo: null,
    id: '',
    restaurant: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loginEmail: '',
    loginPassword: '',

    greet: '',
    empUserId: '',
    empUserFirstName: '',
    empUserLastName: '',
    empUserRestaurantName: '',
    empuserEmail: '',

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

    winewiththisscore: '',
    newScores: [],
    scoreId: '',
    testmessage: ''
  }

  hideShowSummary = id => {
    const newState = { ...this.state }
    newState.empuseId = newState.user._id
    newState.newScores = newState.scoreCollection.sort((a, b) => a.wine.localeCompare(b.wine))

    newState.showMeSummary = !newState.showMeSummary
    this.setState(newState)
    // console.log('HEHEHEHEHEHE')
    // console.log(newState.newScores)
  }

  getUser = () => {
    API.getUser().then(response => {
      console.log('Current User: ', response)
      if (!!response.data.user) {
        console.log('Users Scores:', response.data.user.scores)
        this.setState({
          loggedIn: true,
          user: response.data.user,
          scoreCollection: response.data.user.scores,
        })
        this.getSavedWine()
        console.log(this.state.restaurant, "'s wine list: ", this.state.wineCollections)
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
        this.props.history.push('/')
      }
    })
  }

  componentDidMount () {
    this.getUser()
  }

  getSavedWine = () => {
    console.log('////////////////')
    console.log(this.state.user.restaurantId)
    console.log(this.state.wineCollections)

    const admin = { restaurantId: this.state.user.restaurantId }
    API.getSavedWine(admin)
      .then(res => {
        this.setState({
          wineCollections: res.data.Wines,
          ABCollections: res.data.Wines.sort((a, b) => a.name.localeCompare(b.name))
        })
        this.showScore()
        console.log('Alphabetical:', this.state.ABCollections)
      })
      .catch(() =>
        this.setState({
          message: 'Wine not available'
        })
      )
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleLogout = event => {
    console.log('logging out')
    API.logOut().then(response => {
      this.props.history.push('/')
      console.log(response.data.msg)
      this.setState({
        loggedIn: false,
        user: null,
      })
      // this.props.history.push('/')
      console.log(this.state)
    })
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
    this.setState(newState)
  }

  hideShowEmpInfo = () => {
    const newState = { ...this.state }
    newState.showMeEmpInfo = !newState.showMeEmpInfo
    // newState.scale = this.state.scale > 1 ? 1 : 1.5

    this.setState(newState)
  }

  hideShow4 = id => {
    const newState = { ...this.state }
    newState.greet = 'Welcome!'
    newState.empuseId = newState.user._id
    newState.empUserFirstName = newState.user.firstName
    newState.empUserLastName = newState.user.lastName
    newState.empUserRestaurantName = newState.user.restaurantName
    newState.empuseEmail = newState.user.email
    console.log(newState.empuseId)
    newState.showMe4 = !newState.showMe4
    this.setState(newState)
  }

  render () {
    return (
      <Container>
        <div className="doesThisHelp">

          {/* MODAL ----------------------- */}
          <FeedbackModal
            id={this.state.id}
            restaurant={this.state.restaurant}
            name={this.state.user.firstName}
            lastName={this.state.user.lastName}
            email={this.state.user.email}
            url='http://localhost:3000/employeepage'
            showMe4={this.state.showMe4}
            hideShow4={this.state.hideShow4}
          ></FeedbackModal>
          {/* MODAL ----------------------- */}

          <Navbar
            userId={this.state.user._id}
            userFirstName={this.state.user.firstName}
            userLastName={this.state.user.lastName}
            userAdmin={this.state.user.isAdmin}
            restaurantName={this.state.user.restaurantName}
            handleLogout={this.handleLogout}
            hideShowEmpInfo={this.hideShowEmpInfo}
            hideShow4={this.hideShow4}
          ></Navbar>
        </div>

        <div className="emppagemainwrap">
          <Empinfo
            user={this.state.user}
            id={this.state.user._id}
            email={this.state.user.email}
            firstName={this.state.user.firstName}
            lastName={this.state.user.lastName}
            restaurantName={this.state.user.restaurantName}
            showMeEmpInfo={this.state.showMeEmpInfo}
            hideShowEmpInfo={this.hideShowEmpInfo}
            handleLogout={this.handleLogout}
            greet={this.state.greet}
          />

          {/* <Jumbotron> */}
          {/*   <h1 className="text-center"> */}
          {/*     <strong>ADMIN PAGE WINE COLLECTIONS & EMPLOYEE LIST</strong> */}
          {/*   </h1> */}
          {/*   <h2 className="text-center">Search for wine collections and Add Employees</h2> */}
          {/* </Jumbotron> */}


          <div className="employeepagewrapper">
            <div className="navTest">
            </div>
            <div className="emppagecol">
              <div className="empwelcomebtnwrap">
                <button
                  onClick={() => this.hideShowEmpInfo()}
                  className="empwelcomebtn"
                >
                  <Header2 user={this.state.user}/>
                </button>


              </div>
              <div className="quizsummarybtnwrap">
                <button
                  onClick={() => this.hideShowSummary()}
                  className="quizsummarybtn"
                >
                  Test Scores
                </button>
              </div>
              <div className="wineTitleWrap">
                <div className="wineTitleWrap1">
                  {/* <div><Link to="/wines"className={window.location.pathname === "/wines" ? "nav-link active" : "nav-link"} ><button></button></Link></div> */}
                </div>
              </div>

              <div className="emppageColWrap">
                <div className="emppageColWrap1">
                  {this.state.wineCollections.length ? (
                    <List>
                      {this.state.wineCollections.map(wine => (
                        <SavedWine
                          // showScore = {this.showScore}
                          // newScore = {this.state.newScore}
                          key={wine._id}
                          id={wine._id}
                          name={wine.name}
                          ageability={this.state.ageability}
                          // handleWineDelete={this.handleWineDelete}
                          hideShowQuiz={this.hideShowQuiz}
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
                      <h2 className="text-center">There are no wines on the {this.state.restaurantName} wine list</h2>
                    )}
                </div>
              </div>

              <div>
                {this.state.scoreCollection.length ? (
                  <List>
                    {this.state.scoreCollection.map(score => (
                      <ScoreSummary
                        key={score._id}
                        wine={score.wine}
                        score={score.score}
                        newScores={this.state.newScores}
                        hideShowSummary={this.hideShowSummary}
                        showMeSummary={this.state.showMeSummary}
                      />
                    ))}
                  </List>
                ) : null}
              </div>

            </div>
            {/* -----------------EMPLOYEES COLUMN------------------- */}
          </div>
        </div>
      </Container>
    )
  }
}

export default EmployeePage
