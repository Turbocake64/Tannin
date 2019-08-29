import React from 'react'
import './style.css'

// class component QuestionCard(props) {
class QuestionCard extends React.Component {
  handleBtnDis = (event) => {
    this.setState({ disabled: true })
  }

  handleBtnClick = (event) => {
    this.props.handleBtnPoint(event)
    this.handleBtnDis(event)
  }

  handleFlavorClick = (event) => {
    this.props.handleCheckFlavor(event)
    this.handleBtnDis(event)
  }

  handlePairingClick = (event) => {
    this.props.handleCheckPairing(event)
    this.handleBtnDis(event)
  }
  handleVarietalClick = (event) => {
    this.props.handleCheckVarietal(event)
    this.handleBtnDis(event)
  }

  answers = this.props.answers
  falses = this.answers ? this.answers.splice(this.answers.indexOf(this.props[this.props.category]), 1) : null
  shuffledFalses = this.answers ? this.props.shuffle(this.answers) : null
  selections = this.answers ? (this.answers.slice(0, 3)) : null
  dummThing = this.selections ? (this.selections.push(this.props[`${this.props.category}`])) : null
  shuffledSelections = this.selections ? this.props.shuffle(this.selections) : null

  constructor (props) {
    super(props)
    this.state = {
      disabled: false,
    }
  }

  render () {
    return (
      <div className="qcard" style={{ backgroundColor: this.state.selectedColor }}>
        <div className="qcard2">
          <h2 className="questionName">{this.props.question}{this.props.wineName}?</h2>
          {/* If false answers are available, render button for each answer, else render a submit (specifically for the flavors question) */}
          <div>
            {this.selections ? this.selections.map(answer => {
              return (
                answer === this.props[`${this.props.category}`] ?
                  <div>
                    <button className="question" disabled={this.state.disabled} onClick={this.handleBtnClick}
                            value="1">{answer}</button>
                    <br />
                  </div> : <div>
                    <button className="question" disabled={this.state.disabled} onClick={this.handleBtnClick}
                            value="0">{answer}</button>
                    <br/>
                  </div>
              )
            }) : this.props.category === "pairings" ?
              <div className="AnswerButtons">
                <input
                  onChange={this.props.handleInputChange}
                  value={this.props.submittedPairing}
                  name="submittedPairing"
                  type="text"
                  placeholder="Only submit one pairing"
                />
                <button
                  className="submitAnswer" disabled={this.state.disabled}
                  onClick={this.handlePairingClick}
                  value={this.props.submittedPairing}
                  >
                  Submit
                </button>
              </div>
              : this.props.category === 'primaryFlavors' ?
                <div className="AnswerButtons">
                  <input
                    onChange={this.props.handleInputChange}
                    value={this.props.submittedFlavor}
                    name="submittedFlavor"
                    type="text"
                    placeholder="Only submit one flavor"
                  />
                  <button
                    className="submitAnswer" disabled={this.state.disabled}
                    onClick={this.handleFlavorClick}
                    value={this.props.submittedFlavor}
                    >
                    Submit
                  </button>
                </div>
                :
                <div className="AnswerButtons">
                  <input
                    onChange={this.props.handleInputChange}
                    value={this.props.submittedVarietal}
                    name="submittedVarietal"
                    type="text"
                    placeholder="Only submit one varietal"
                  />
                  <button
                    className="submitAnswer" disabled={this.state.disabled}
                    onClick={this.handleVarietalClick}
                    value={this.props.submittedVarietal}
                    >
                    Submit
                  </button>
                </div>
            }

          </div>
        </div>
      </div>
    )
  }
}

export default QuestionCard