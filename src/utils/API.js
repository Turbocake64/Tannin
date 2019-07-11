import axios from 'axios'

const mongoDBUrl = 'http://localhost:3001'
// const mongoDBUrl = 'https://tannin-wine.herokuapp.com/'
export default {

  // signUpSubmit: function (userInfo) {
  //   console.log(userInfo);
  //   return axios.post("https://tannin-api.herokuapp.com/api/user/signup", userInfo);
  // },
  // logIn: function (loginInfor) {
  //   console.log(loginInfor);
  //   return axios.post("https://tannin-api.herokuapp.com/api/user/login", loginInfor);
  // },
  // logOut: function () {
  //   // console.log(userInfo);
  //   return axios.post("https://tannin-api.herokuapp.com/api/user/logout");
  // },
  // getUser: function () {
  //   return axios.get('https://tannin-api.herokuapp.com/api/user/getUser');
  // },
  //   getMaster: function(q) {
  //     return axios.get("https://tannin-api.herokuapp.com/api/wines/");
  //   },

  //   getSavedWine: function(admin) {
  //     console.log(admin);
  //     return axios.post("https://tannin-api.herokuapp.com/api/getwine/",admin);
  //   },
  //   addEmployee: function(employeeData) {
  //     console.log(employeeData);
  //     return axios.post("https://tannin-api.herokuapp.com/api/addEmployee", employeeData)
  //   },
  //   addWine: function(wineData) {
  //     console.log(wineData);
  //     return axios.put("https://tannin-api.herokuapp.com/api/addwine/", wineData);
  //   },

  //   deleteWine: function(delelteWine) {
  //     console.log(delelteWine);
  //     return axios.put("https://tannin-api.herokuapp.com/api/restaurant/delete", delelteWine);
  //   },
  //   deleteEmployee: function(deleteEmp) {//localhost:3001/api/addEmployee/
  //     console.log(deleteEmp);
  //     return axios.put("https://tannin-api.herokuapp.com/api/addEmployee/", deleteEmp)
  //   },

  //LOCAL ROUTES
  //------------------------------------------------------
  signUpSubmit: function (userInfo) {
    console.log(userInfo);
    return axios.post("/api/user/signup", userInfo);
  },
  logIn: function (loginInfor) {
    console.log(loginInfor);
    return axios.post("/api/user/login", loginInfor);
  },
  logOut: function () {
    // console.log(userInfo);
    return axios.post("/api/user/logout");
  },
  getUser: function () {
    return axios.get('/api/user/getUser');
  },
  getMaster: function (q) {
    return axios.get("http://localhost:3001/api/wines/");
  },

  getSavedWine: function (admin) {
    console.log(admin);
    return axios.post("http://localhost:3001/api/getwine/", admin);
  },
  addEmployee: function (employeeData) {
    console.log(employeeData);
    return axios.post("/api/addEmployee", employeeData)
  },
  addWine: function (wineData) {
    console.log(wineData);
    return axios.put("http://localhost:3001/api/addwine/", wineData);
  },
  // getRestoId: function(wineData) {
  //   console.log(wineData);
  //   return axios.put("http://localhost:3001/api/addwine/", wineData);
  // },

  addScore: function (scoreData) {//localhost:3001/api/addEmployee/
    console.log(scoreData);
    return axios.put("http://localhost:3001/api/employees/score", scoreData)
    },
    
  deleteWine: function (delelteWine) {
    console.log(delelteWine);
    return axios.put("http://localhost:3001/api/restaurants/delete", delelteWine);
  },
  deleteEmployee: function (deleteEmp) {//localhost:3001/api/addEmployee/
    console.log(deleteEmp);
    return axios.put("http://localhost:3001/api/addEmployee/", deleteEmp)
  },


};


