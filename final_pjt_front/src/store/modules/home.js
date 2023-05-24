import axios from 'axios'

// boxoffice API
const KOR_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
const KOR_KEY = 'be06ce196e4f8f2cdc15f51e902a4b12'

// 포스터 URI를 받기 위한 TMDB API
// TMDB_URL = 'https://api.themoviedb.org/3/search/movie?query=%25EC%259D%25B8%25EC%2596%25B4%25EA%25B3%25B5%25EC%25A3%25BC&include_adult=true&language=ko-KR&page=1'
// const headers = {
//     'Accept': 'application/json',
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjJjZjljNTZlMTFjZDFmYmE1NGViNjVkYzE0NDQ3MiIsInN1YiI6IjYzZDMxNzFkY2I3MWI4MDA3YzFiZDY2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FzZtnkvbUdkKTGImupZ0gfgEKPS2ZSavoexo13vtSmE'
// }

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1
var day = date.getDate();
if(month < 10){
    month = "0"+month;
}
if(day < 10){
    day = "0"+day;
}
var today = year+""+month+""+day - 1
var todaystr = today.toString()

export default {
  namespaced: true,
  state: {
    boxoffice: [],
  },
  getters: {
    boxoffice: (state) => state.boxoffice,
  },
  mutations: {
    FETCH_BOXOFFICE (state, boxoffice) {
      state.boxoffice = boxoffice
    },
  },
  actions: {
    fetchBoxoffice ({ commit }) {
      axios ({
        method: 'get',
        url : KOR_URL,
        params: {
          key: KOR_KEY,
          targetDt: todaystr
        },
      })
      .then(res => {
        commit('FETCH_BOXOFFICE', res.data.boxOfficeResult.dailyBoxOfficeList)
        // console.log(res.data.boxOfficeResult.dailyBoxOfficeList)
      })
      .catch(err => console.log(err))
    },
  // methods:
  
    // fetch()
    //   axios ({
    //     method: 'get',
    //     url: TMDB_URL,
    //     params: {

    //     }
    //     }),        
        
    //     'https://api.themoviedb.org/3/search/movie?query=%25EC%259D%25B8%25EC%2596%25B4%25EA%25B3%25B5%25EC%25A3%25BC&include_adult=true&language=ko-KR&page=1', options)
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err))

  // },
}}