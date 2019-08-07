import axios from 'axios'

export default {
  //PROD ROUTES
  //------------------------------------------------------
  // signUpSubmit: function (userInfo) {
  //   console.log(userInfo)
  //   return axios.post('https://tannin-wine.herokuapp.com/api/user/signup', userInfo)
  // },
  // logIn: function (loginInfo) {
  //   console.log(loginInfo)
  //   return axios.post('https://tannin-wine.herokuapp.com/api/user/login', loginInfo)
  // },
  // logOut: function () {
  //   // console.log(userInfo);
  //   return axios.post('https://tannin-wine.herokuapp.com/api/user/logout')
  // },
  // getUser: function () {
  //   return axios.get('https://tannin-wine.herokuapp.com/api/user/getUser')
  // },
  // getMaster: function () {
  //   return axios.get('https://tannin-wine.herokuapp.com/api/wines/')
  // },
  // getSavedWine: function (admin) {
  //   console.log(admin)
  //   return axios.post('https://tannin-wine.herokuapp.com/api/getwine/', admin)
  // },
  // addEmployee: function (employeeData) {
  //   console.log(employeeData)
  //   return axios.post('https://tannin-wine.herokuapp.com/api/addEmployee', employeeData)
  // },
  // addWine: function (wineData) {
  //   console.log(wineData)
  //   return axios.put('https://tannin-wine.herokuapp.com/api/addwine/', wineData)
  // },
  // addScore: function (scoreData) {
  //   console.log(scoreData)
  //   return axios.put('https://tannin-wine.herokuapp.com/api/employees/score', scoreData)
  // },
  // deleteWine: function (deleteWine) {
  //   console.log(deleteWine)
  //   return axios.put('https://tannin-wine.herokuapp.com/api/restaurant/delete', deleteWine)
  // },
  // deleteEmployee: function (deleteEmp) {
  //   console.log(deleteEmp)
  //   return axios.put('https://tannin-wine.herokuapp.com/api/addEmployee/', deleteEmp)
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
    return axios.post('/api/getwine/', admin)
  },
  addEmployee: function (employeeData) {
    console.log(employeeData)
    return axios.post('/api/addEmployee', employeeData)
  },
  addWine: function (wineData) {
    console.log(wineData)
    return axios.put('/api/addwine/', wineData)
  },
  addScore: function (scoreData) {
    console.log(scoreData)
    return axios.put('/api/employees/score', scoreData)
  },
  deleteWine: function (deleteWine) {
    console.log(deleteWine)
    return axios.put('/api/restaurants/delete', deleteWine)
  },
  deleteEmployee: function (deleteEmp) {
    console.log(deleteEmp)
    return axios.put('/api/addEmployee/', deleteEmp)
  },
}
