// import React, { Component } from 'react'
// // import Footer from "../components/Footer";
// import Loginsignup from '../components/Loginsignup'
// import API from '../utils/API'
// import { Container } from '../components/Grid'
//
// class Login extends Component {
//   state = {
//     books: [],
//     q: '',
//     showMe: false,
//
//     id: '',
//     restaurant: '',
//     name: '',
//     lastName: '',
//     email: '',
//     password: '',
//     loginemail: '',
//     loginpassword: ''
//   }
//
//   hideShow = () => {
//     const newState = { ...this.state }
//     newState.showMe = !newState.showMe
//     newState.scale = this.state.scale > 1 ? 1 : 1.5
//     this.setState(newState)
//   }
//
//   handleInputChange = event => {
//     const { name, value } = event.target
//     this.setState({
//       [name]: value
//     })
//   }
//
//   getBooks = () => {
//     API.getBooks(this.state.q)
//       .then(res =>
//         this.setState({
//           books: res.data
//         })
//       )
//       .catch(() =>
//         this.setState({
//           books: [],
//           message: 'No New Books Found, Try a Different Query'
//         })
//       )
//   }
//
//   handleFormSubmit = event => {
//     event.preventDefault()
//     this.getBooks()
//   }
//
//   handleBookSave = id => {
//     const book = this.state.books.find(book => book.id === id)
//
//     API.saveBook({
//       googleId: book.id,
//       title: book.volumeInfo.title,
//       subtitle: book.volumeInfo.subtitle,
//       link: book.volumeInfo.infoLink,
//       authors: book.volumeInfo.authors,
//       description: book.volumeInfo.description,
//       image: book.volumeInfo.imageLinks.thumbnail
//     }).then(() => this.getBooks())
//   }
//
//   render () {
//     return (
//       <Container>
//         <Loginsignup
//           handleInputChange={this.handleInputChange}
//           id={this.state.id}
//           restaurant={this.state.restaurant}
//           name={this.state.name}
//           lastName={this.state.lastName}
//           email={this.state.email}
//           password={this.state.password}
//           loginemail={this.state.loginemail}
//           loginpassword={this.state.loginpassword}
//           showMe={this.state.showMe}
//           hideShow={this.hideShow}
//         />
//         {/*<Footer /> */}
//       </Container>
//     )
//   }
// }
//
// export default Login
