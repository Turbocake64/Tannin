import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import QuizResults from '../components/QuizResults'
import FeedbackModal from '../components/FeedbackModal'

import Userinfo from '../components/Userinfo';
import API from '../utils/API'
import QuestionCard from '../components/QuestionCard'
import Wrapper from '../components/Wrapper'
import questions from '../questions.json'
import './style.css'

class Quiz extends Component {
  state = {
    user: [],
    questions,
    filteredQs: [],
    correctFlavors: [],
    submittedFlavor: '',
    correctPairings: [],
    submittedPairing: '',
    correctVarietal: [],
    submittedVarietal: '',
    misanswered: [],
    counter: 0,
    score: 0,
    highScore: 0,
    wineData: [],
    showMe: false,
    showMeUserInfo: false,
    showMeFeedback: false
  }

  componentWillMount () {
    this.getUser()
  }

  getUser = () => {
    API.getUser().then(response => {
      if (!!response.data.user) {
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

  getSavedWine = () => {
    const admin = { restaurantId: this.state.user.restaurantId }
    API.getSavedWine(admin)
      .then(res => {
          this.setState({
            wineCollections: res.data.Wines,
          })
          this.getClickedWine()
        }
      )
      .catch(() =>
        this.setState({
          message: 'Wine not available'
        })
      )
  }

  getClickedWine = () => {
    const id = this.props.location.state.wineId
    const wine = this.state.wineCollections.find(wine => wine._id === id)
    // console.log(wine)
    this.setState({
      wineData: wine,
      correctFlavors: wine.primaryFlavors,
      correctPairings: wine.pairings,
      correctVarietal: wine.varietal
    })

    const categories = Object.keys(this.state.wineData)

    const filteredQs = questions.filter(q => {
      return categories.includes(q.category)
    })
    this.shuffle(filteredQs)
    this.setState({ filteredQs: filteredQs })
    console.log('????????????????')
    console.log(filteredQs)
  }

  // Here we use the Fisher-Yates algorithm to randomize the characters array
  shuffle = (arr) => {
    let j, x, i
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      x = arr[i]
      arr[i] = arr[j]
      arr[j] = x
    }
    return arr
  }

  // Checks the value of a multiple choice button and adds that to the user's counter
  handleBtnPoint = (event) => {
    let points = parseInt(event.target.value)
    if (points === 0) {
      this.state.misanswered.push(this.props.category)
    }
    this.setState({
      counter: this.state.counter + points,
    })
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target

    // Updating the input's state
    this.setState({
      [name]: value
    })
  }

  // Checks the primary flavor against possible correct answers and add 1 point if a match
  handleCheckFlavor = () => {
    const newState = { ...this.state }

    if (this.state.correctFlavors.includes(this.state.submittedFlavor)) {

      this.setState({
        counter: newState.counter + 1,
        submittedFlavor: '',
      })
    } else {
      this.setState({
        submittedFlavor: '',
      })
    }
  }

  // Check the input pairing against possible correct answers and add 1 point if a match
  handleCheckPairing = () => {
    const newState = { ...this.state }

    if (this.state.correctPairings.includes(this.state.submittedPairing)) {
      this.setState({
        counter: newState.counter + 1,
        submittedPairing: '',
      })
    } else {
      this.setState({
        submittedPairing: '',
      })
    }
  }

  // Check the input varietal against possible correct answers and add 1 point if a match
  handleCheckVarietal = () => {
    const newState = { ...this.state }

    if (this.state.correctVarietal.includes(this.state.submittedVarietal)) {
      this.setState({
        counter: newState.counter + 1,
        submittedVarietal: '',
      })
    } else {
      this.setState({
        submittedVarietal: '',
      })
    }
  }

  handleScoreCalc = () => {
    let hundreds = this.state.counter * 100
    let total = this.state.filteredQs.length
    this.setState(Math.round(hundreds / total))
    this.addScore()
  }

  handleQuizPageBtn = id => {
    const getQuiz = { id: id, restaurantId: this.state.user.restaurantId }
    API.getQuiz(getQuiz).then(res =>
      this.componentDidMount()
    )
  }

  refresh = () => {
    window.location.reload()
  }

  toEmployeePage = () => {
    window.location.replace('http://localhost:3000/employeepage')
  }

  addScore = () => {
    const scoreData = { userId: this.state.user._id, wine: this.state.wineData.name, score: this.state.score }
    this.hideShow()
    console.log(scoreData)
    API.addScore(scoreData).then(res => {
      console.log('ADDSCORE')
      console.log(res)
      console.log(res.data.scores)
      // this.props.history.push('/employeepage');
      // window.location.reload()

    })
  }

  handleLogout = () => {
    console.log('logging out')
    API.logOut().then(response => {
      console.log(response.data)
      this.props.history.push(`/`)
      this.setState({
        loggedIn: false,
        user: null,
      })
      // this.props.history.push(`/`);
    })
  }

  hideShow = () => {
    const newState = { ...this.state }
    newState.showMe = !newState.showMe
    // newState.scale = this.state.scale > 1 ? 1 : 1.5

    this.setState(newState)
  }

  hideShowFeedback = (e) => {
    const newState = { ...this.state}
    newState.showMeFeedback = !newState.showMeFeedback
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    this.setState(newState)
  }

  hideShowUserInfo = id => {
    const newState = { ...this.state }
    newState.showMeUserInfo = !newState.showMeUserInfo
    this.setState(newState)
  }

  hideShow4 = event => {
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
    event.preventDefault()
  }

  // renders react elements into the DOM
  render () {
    return (
      // the parent div into which our components will be rendered
      <div className="background">

        {/* MODAL ----------------------- */}
        <QuizResults
          userId={this.state.user._id}
          firstName={this.state.user.firstName}
          lastName={this.state.user.lastName}
          wineName={this.state.wineData.name}
          refresh={this.refresh}
          toEmployeePage={this.toEmployeePage}
          score={this.state.score}
          addScore={this.addScore}
          showMe={this.state.showMe}
        />
        {/* MODAL ----------------------- */}

        {/* MODAL ----------------------- */}
        <FeedbackModal
          id={this.state.id}
          restaurant={this.state.restaurant}
          name={this.state.user.firstName}
          lastName={this.state.user.lastName}
          email={this.state.user.email}
          url='http://localhost:3000/quiz'
          showMe={this.state.showMeFeedback}
          hideShow={this.hideShowFeedback}
        ></FeedbackModal>
        {/* MODAL ----------------------- */}

        {/* MODAL ----------------------- */}
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
          {/* MODAL ----------------------- */}

        <Navbar
          userId={this.state.user._id}
          userFirstName={this.state.user.firstName}
          userLastName={this.state.user.lastName}
          userAdmin={this.state.user.isAdmin}
          restaurantName={this.state.user.restaurantName}
          handleLogout={this.handleLogout}
          hideShowFeedback={this.hideShowFeedback}
          hideShowUserInfo={this.hideShowUserInfo}
        ></Navbar>

        <Wrapper>
          <div className="qcardwrapper1">
            <div className="qcardwrapper2">
              {/* Map over this.state.characters and render a CharacterCard component for each character object */}
              {this.state.filteredQs.map(filteredQ => (
                <QuestionCard
                  // functions to be inherited as props
                  handleBtnPoint={this.handleBtnPoint}
                  handleInputChange={this.handleInputChange}
                  handleCheckFlavor={this.handleCheckFlavor}
                  handleCheckPairing={this.handleCheckPairing}
                  handleCheckVarietal={this.handleCheckVarietal}
                  shuffle={this.shuffle}
                  submitFlavor={this.state.submitFlavor}

                  //values to be inherited as props
                  id={filteredQ.id}
                  key={filteredQ.id}
                  question={filteredQ.question}
                  acidity={this.state.wineData.acidity}
                  ageability={this.state.wineData.ageability}
                  alcohol={this.state.wineData.alcohol}
                  answers={filteredQ.falseAnswers}

                  body={this.state.wineData.body}
                  category={filteredQ.category}
                  color={this.state.wineData.color}
                  decant={this.state.wineData.decant}
                  pairings={this.state.wineData.pairings}
                  region={this.state.wineData.region}
                  sparkling={this.state.wineData.sparkling}
                  sweetness={this.state.wineData.sweetness}
                  temp={this.state.wineData.temp}
                  tannin={this.state.wineData.tannin}
                  varietal={this.state.wineData.varietal}
                  wineName={this.state.wineData.name}
                  counter={this.state.counter}
                />
              ))}
              <div className="submitanswersbtnquizwrap">
                <div className="submitanswersbtnquiz">
                  <button className="submitFinal" onClick={this.handleScoreCalc}>Submit Answers</button>
                  <button className="closebtnquiz" onClick={this.toEmployeePage}>Return to List</button>
                </div>
              </div>
            </div>

          </div>
        </Wrapper>

      </div>
    )
  }
}

export default Quiz
