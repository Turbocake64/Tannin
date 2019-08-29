import React, { Component } from 'react';
import SavedWine from '../components/SavedWine';
import FeedbackModal from '../components/FeedbackModal';
import API from '../utils/API';
import Navbar from '../components/Navbar';
import Header2 from '../components/Header2';
import Userinfo from '../components/Userinfo';
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
    showMeFeedback: false,
    showMeUserInfo: false,
    showMe: false,
    user: '',
    loggedIn: true,
    redirectTo: null,

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
  }

  getUser = () => {
    API.getUser().then(response => {
      console.log('Current User: ', response)
      if (response.data.user) {
        console.log('Users Scores:', response.data.user.scores)
        this.setState({
          loggedIn: true,
          user: response.data.user,
          scoreCollection: response.data.user.scores,
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

  componentDidMount () {
    this.getUser()
  }

  getSavedWine = () => {
    console.log('////////////////')
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
          message: this.state.ABCollections
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

  hideShowUserInfo = id => {
    const newState = { ...this.state }
    newState.showMeUserInfo = !newState.showMeUserInfo
    // newState.scale = this.state.scale > 1 ? 1 : 1.5

    this.setState(newState)
  }

  hideShowFeedback = (e) => {
    const newState = { ...this.state }
    newState.showMeFeedback = !newState.showMeFeedback
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
            showMe={this.state.showMeFeedback}
            hideShow={this.state.hideShowFeedback}
          ></FeedbackModal>
          {/* MODAL ----------------------- */}

          <Navbar
            userId={this.state.user._id}
            userFirstName={this.state.user.firstName}
            userLastName={this.state.user.lastName}
            userAdmin={this.state.user.isAdmin}
            restaurantName={this.state.user.restaurantName}
            handleLogout={this.handleLogout}
            hideShowUserInfo={this.hideShowUserInfo}
            hideShowFeedback={this.hideShowFeedback}
          ></Navbar>
        </div>

        <div className="emppagemainwrap">

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

          <div className="employeepagewrapper">
            <div className="navTest">
            </div>
            <div className="emppagecol">
              <div className="empwelcomebtnwrap">
                <button
                  onClick={() => this.hideShowUserInfo()}
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
