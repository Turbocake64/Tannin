import React, { Component } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Wine from '../components/Wine'
import API from '../utils/API'
import { Container } from '../components/Grid'
import { List } from '../components/List'

class Wines extends Component {
  state = {
    winesMaster: [],
    masterTannin: [],
    wineCollections: [],
    showMe: false,
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

    user: '',
    // restaurantId: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    // loginemail: '',
    // loginpassword: '',
    loggedIn: true,
    redirectTo: null,
  }

  componentDidMount () {
    this.getUser()
    this.getMaster()
  }

  getUser = () => {
    API.getUser().then(response => {
      console.log('LOGGED IN USER: ', response)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        console.log(response.data)
        this.setState({
          loggedIn: true,
          user: response.data.user
        })

        // this.getSavedWine()
      } else {
        this.setState({
          loggedIn: false,
          user: null,
          redirectTo: '/'
        })
      }
    })
  }

  hideShow = id => {
    const newState = { ...this.state }
    const wine = this.state.winesMaster.find(wine => wine._id === id)
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

  getMaster = () => {
    API.getMaster()
      .then(res => {
          // console.log('COMEBACK FROM MASTER')
          // console.log(res.data)
          // console.log('MASTER')
          this.setState({
            winesMaster: res.data
          })
        }
      )
      .catch(() =>
        this.setState({
          message: 'Wine not available'
        })
      )
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
      // this.props.history.push('/');
      console.log(this.state)
    })
  }

  handleWineAdd = id => {
    console.log('handleWineAdd ----------')
    console.log('this.state', this.state)
    console.log('user.restaurantId: ' + this.state.restaurantId)
    console.log('----------')
    const wine = this.state.winesMaster.find(wine => wine._id === id)
    const wineData = {
      Wines: wine._id,
      restaurantId: this.state.restaurantId
    }
    console.log('ADDWINE INFO ----------')
    console.log(wineData)
    console.log('ADDWINE INFO ----------')

    API.addWine(wineData).then(res => {
      console.log('ADD WINE ----------')
      console.log(res.data)
      console.log('ADD WINE ----------')
      this.setState({
        wineCollections: res.data.Wines
      })
    })
  }

  sortById = () => {
    let sortById = []
    API.getMaster()
      .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            if (!this.state.wineCollections.includes(res.data)) {
              sortById.push(res.data[i])
            }
          }
          this.setState({
            winesMaster: sortById
          })
        }
      )
  }

  sortByName = () => {
    this.setState({
      winesMaster: this.state.winesMaster.sort((a, b) => a.name.localeCompare(b.name))
    })
  }

  sortByTannin = () => {
    let sortByTannin = []
    API.getMaster()
      .then(res => {
        console.log('Sorted by Tannin')
        for (let i = 0; i < res.data.length; i++) {
          if (!!res.data[i].tannin && !this.state.wineCollections.includes(res.data)) {
            sortByTannin.push(res.data[i])
          }
        }
        this.setState({
          winesMaster: sortByTannin.sort((a, b) => a.tannin.localeCompare(b.tannin))
        })
      })
  }

  sortByBody = () => {
    let sortByBody = []
    API.getMaster()
      .then(res => {
        console.log('Sorted by Body')
        for (let i = 0; i < res.data.length; i++) {
          if (!!res.data[i].body && !this.state.wineCollections.includes(res.data)) {
            sortByBody.push(res.data[i])
          }
        }
        this.setState({
          winesMaster: sortByBody.sort((a, b) => a.body.localeCompare(b.body))
        })
      })
  }

  sortByRegion = () => {
    let sortByRegion = []
    API.getMaster()
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (!!res.data[i].region && !this.state.wineCollections.includes(res.data)) {
            sortByRegion.push(res.data[i])
          }
        }
        this.setState({
          winesMaster: sortByRegion.sort((a, b) => a.region.localeCompare(b.region))
        })
      })
  }

  hideShow3 = id => {
    const newState = { ...this.state }
    if (newState.user === null) {
      console.log('you lose')
      newState.greet = 'Hello Guest'
    } else if (newState.user.firstName) {
      newState.greet = 'Welcome'
      newState.useId = newState.user._id
      newState.usefirstName = newState.user.firstName
      newState.uselastName = newState.user.lastName
      newState.useEmail = newState.user.email
      newState.userestaurantName = newState.user.restaurantName
      console.log(newState.useId)
    }
    newState.showMe3 = !newState.showMe3
    this.setState(newState)
  }

  render () {
    return (
      <Container>
        <Navbar
          userId={this.state._id}
          userFirstName={this.state.firstName}
          userLastName={this.state.lastName}
          userAdmin={this.state.isAdmin}
          restaurantName={this.state.restaurantName}
          handleLogout={this.handleLogout}
          hideShow4={this.hideShow4}
        />

        <div className="cardwrapper0">

          <div className="winesheader">
            <h1 className="textcenter">
              <strong>Search for WINES</strong>
            </h1>
          </div>

          <div className="cardwrapper1a">
            <div className="cardwrapper1">
              <div className="cardwrapper2">
                <Card title="">
                  {this.state.winesMaster.length ? (
                    <List>
                      {this.state.winesMaster.map(wine => (
                        <Wine
                          key={wine._id}
                          id={wine._id}
                          name={wine.name}
                          showMe={this.state.showMe}
                          hideShow={this.hideShow}
                          handleWineAdd={this.handleWineAdd}
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
                    <h2 className="text-center">{this.state.message}</h2>
                  )}
                </Card>
              </div>
            </div>
          </div>

        </div>
      </Container>
    )
  }
}

export default Wines
