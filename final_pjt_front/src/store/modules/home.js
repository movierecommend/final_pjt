import axios from 'axios'

// boxoffice API
const KOR_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
const KOR_KEY = 'be06ce196e4f8f2cdc15f51e902a4b12	'
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
        console.log(res.data.boxOfficeResult)
      })
      .catch(err => console.log(err))
    },
  },
}