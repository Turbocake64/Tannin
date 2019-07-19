import axios from 'axios'

export default {
  //PROD ROUTES
  //------------------------------------------------------
  // signUpSubmit: function (userInfo) {
  //   console.log(userInfo)
  //   return axios.post("https://tannin-api.herokuapp.com/api/user/signup', userInfo);
  // },
  // logIn: function (loginInfo) {
  //   console.log(loginInfo)
  //   return axios.post('https://tannin-api.herokuapp.com/api/user/login', loginInfo)
  // },
  // logOut: function () {
  //   // console.log(userInfo);
  //   return axios.post('https://tannin-api.herokuapp.com/api/user/logout')
  // },
  // getUser: function () {
  //   return axios.get('https://tannin-api.herokuapp.com/api/user/getUser')
  // },
  // getMaster: function () {
  //   return axios.get('https://tannin-api.herokuapp.com/api/wines/')
  // },
  // getSavedWine: function (admin) {
  //   console.log(admin)
  //   return axios.post('https://tannin-api.herokuapp.com/api/getwine/', admin)
  // },
  // addEmployee: function (employeeData) {
  //   console.log(employeeData)
  //   return axios.post('https://tannin-api.herokuapp.com/api/addEmployee', employeeData)
  // },
  // addWine: function (wineData) {
  //   console.log(wineData)
  //   return axios.put('https://tannin-api.herokuapp.com/api/addwine/', wineData)
  // },
  // deleteWine: function (deleteWine) {
  //   console.log(deleteWine)
  //   return axios.put('https://tannin-api.herokuapp.com/api/restaurant/delete', deleteWine)
  // },
  // deleteEmployee: function (deleteEmp) {//localhost:3001/api/addEmployee/
  //   console.log(deleteEmp)
  //   return axios.put('https://tannin-api.herokuapp.com/api/addEmployee/', deleteEmp)
  // },

  //LOCAL ROUTES
  //------------------------------------------------------
  signUpSubmit: function (userInfo) {
    console.log(userInfo)
    return axios.post('/api/user/signup', userInfo)
  },
  logIn: function (loginInfo) {
    console.log(loginInfo)
    return axios.post('/api/user/login', loginInfo)
  },
  logOut: function () {
    return axios.post('/api/user/logout')
  },
  getUser: function () {
    return axios.get('/api/user/getUser')
  },
  getMaster: function (q) {
    return axios.get('/api/wine/');
  },
  getSavedWine: function (admin) {
    console.log(admin)
    return axios.post('http://localhost:3001/api/getwine/', admin)
  },
  addEmployee: function (employeeData) {
    console.log(employeeData)
    return axios.post('/api/addEmployee', employeeData)
  },
  addWine: function (wineData) {
    console.log(wineData)
    return axios.put('http://localhost:3001/api/addwine/', wineData)
  },
  addScore: function (scoreData) {
    console.log(scoreData)
    return axios.put('http://localhost:3001/api/employees/score', scoreData)
  },
  deleteWine: function (deleteWine) {
    console.log(deleteWine)
    return axios.put('http://localhost:3001/api/restaurants/delete', deleteWine)
  },
  deleteEmployee: function (deleteEmp) {
    console.log(deleteEmp)
    return axios.put('http://localhost:3001/api/addEmployee/', deleteEmp)
  },
}
