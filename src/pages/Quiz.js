import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API'
// import EmployeePage from './pages/EmployeePage'
import QuestionCard from '../components/QuestionCard'
import Wrapper from '../components/Wrapper'
import questions from '../questions.json'
// import wineData from "../franciacorta.json"
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
    counter: 0,
    score: 0,
    highScore: 0,
    wineData: []
  }

  // componentWillMount shuffles the CharacterCards before the DOM is loaded
  componentWillMount () {
    this.getUser()
  }

  getUser = () => {
    API.getUser().then(response => {
      // console.log('LOGGED IN USER: ', response)
      if (!!response.data.user) {
        // console.log('THERE IS A USER')
        // console.log(response.data.user.scores)
        // console.log('???????????????')
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
    // console.log('////////////////')
    // console.log(this.state.user.restaurantId)
    // console.log('////////////////')
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
  shuffle (arr) {
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
    let totalScore = hundreds / total
    // this.state.score = hundreds / total
    this.setState({
      score: this.state.score + totalScore
    })
    this.addScore()
  }

  handleQuizPageBtn = id => {
    const getQuiz = { id: id, restaurantId: this.state.user.restaurantId }
    API.getQuiz(getQuiz).then(res =>
      this.componentDidMount()
    )
  }

  addScore = () => {
    const scoreData = { userId: this.state.user._id, wine: this.state.wineData.name, score: this.state.score }
    console.log(scoreData)
    API.addScore(scoreData).then(res => {
      console.log('ADDSCORE')
      console.log(res)
      console.log(res.data.scores)
      this.props.history.push('/employeepage')
    })
  }

  render () {
    return (
      // the parent div into which our components will be rendered
      <div className="background">

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
            </div>
          </div>
        </Wrapper>

        <div className="submitanswersbtnquizwrap">
          <div className="submitanswersbtnquiz">
            <button className="submitFinal" onClick={this.handleScoreCalc}>
              Submit Answers
            </button>
            <Link onClick={window.location.reload} to="/employeepage">
              <button className="closebtnquiz">
                maybe next time
              </button>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Quiz
