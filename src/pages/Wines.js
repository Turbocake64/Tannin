import React, { Component } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Wine from "../components/Wine";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";

class Wines extends Component {
  state = {
    winesMaster: [],
    displayWines: [],
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
    restaurantId: '',
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
  }

  getUser = () => {
    API.getUser().then(response => {
      console.log('Current User: ', response)
      if (response.data.user) {
        this.getMaster()
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null,
          redirectTo: '/'
        })
      }
    })
  }

  getMaster = () => {
    API.getMaster()
      .then(res => {
        let winesMaster = []
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].name !== '') {
            winesMaster.push(res.data[i])
          }
        }
        this.getSavedWine()
        this.setState({
          winesMaster: winesMaster.sort((a, b) => a.name.localeCompare(b.name)),
        })
      }
      )
      .catch(() =>
        this.setState({
          message: 'Wine not available'
        })
      )
  }

  getSavedWine = () => {
    const admin = { restaurantId: this.state.user.restaurantId }
    API.getSavedWine(admin)
      .then(res => {
        const collections = res.data.Wines
        const master = this.state.winesMaster
        let displayWines = master.filter(wine => !collections.some(wine2 => wine._id === wine2._id));
        this.setState({
          wineCollections: res.data.Wines,
          // ABCollections: res.data.Wines.sort((a, b) => a.name.localeCompare(b.name)),
          displayWines: displayWines
        })
      })
      .catch(() =>
        this.setState({
          message: 'hey'
        })
      )
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

  handleLogout = () => {

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

    const wine = this.state.winesMaster.find(wine => wine._id === id)
    const wineData = {
      Wines: wine._id,
      restaurantId: this.state.user.restaurantId
    }

    API.addWine(wineData).then(res => {
      console.log('ADD WINE')
      console.log(res.data.Wines)
      console.log('ADD WINE')
      let displayWines = this.state.displayWines.filter(wine => wine._id !== id)
      this.setState({
        wineCollections: res.data.Wines,
        displayWines: displayWines
      })
    })
  }

  // searchByName = () => {
    // let input = document.getElementById('myInput');
    // let filter = input.value.toUpperCase();
    // let ul = document.getElementsByClassName("myUL");
    // let li = document.getElementsByClassName("myLI");

    // for (let i = 0; i < li.length; i++) {
    //   let a = li[i].getElementsByClassName("myLI")[0];
    //   let txtValue = a.textContent || a.innerText;
    //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //     li[i].style.display = "";
    //   } else {
    //     li[i].style.display = "none";
    //   }
    // }

  // }

  sortById = () => {
    let display = this.state.winesMaster.filter(wine => !this.state.wineCollections.some(wine2 => wine._id === wine2._id));
    let sortById = display.sort((a, b) => a._id.localeCompare(b._id))
    this.setState({
      displayWines: sortById
    })
  }

  sortByName = () => {
    let display = this.state.winesMaster.filter(wine => !this.state.wineCollections.some(wine2 => wine._id === wine2._id));
    this.setState({
      displayWines: display.sort((a, b) => a.name.localeCompare(b.name))
    })
  }

  sortByTannin = () => {
    let sortByTannin = [];
    let display = this.state.winesMaster.filter(wine => !this.state.wineCollections.some(wine2 => wine._id === wine2._id));
    for (let i = 0; i < display.length; i++) {
      if (display[i].tannin) {
        sortByTannin.push(display[i])
      }
    }
    this.setState({
      displayWines: sortByTannin.sort((a, b) => a.tannin.localeCompare(b.tannin))
    })
  }

  sortByBody = () => {
    let sortByBody = [];
    let display = this.state.winesMaster.filter(wine => !this.state.wineCollections.some(wine2 => wine._id === wine2._id));
    for (let i = 0; i < display.length; i++) {
      if (display[i].body) {
        sortByBody.push(display[i])
      }
    }
    this.setState({
      displayWines: sortByBody.sort((a, b) => a.body.localeCompare(b.body))
    })
  }

  sortByRegion = () => {
    let sortByRegion = [];
    let display = this.state.winesMaster.filter(wine => !this.state.wineCollections.some(wine2 => wine._id === wine2._id));
    for (let i = 0; i < display.length; i++) {
      if (display[i].region) {
        sortByRegion.push(display[i])
      }
    }
    this.setState({
      displayWines: sortByRegion.sort((a, b) => a.region.localeCompare(b.region))
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

  render() {
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
