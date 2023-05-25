<template>
  <div>
    <hr>
      <div>
        <div>
          <h3>외나무다리에서 만난 내 부모님의 원수의 딸(아들), 
            <br>
            절세미녀(남)인 그녀(그)에게 나는?</h3>
            <br>
        </div>
        <div>
          <button :disabled="selected_genre_id_1.includes(23)" @click="selectOption1([23]) ">사랑에 빠진다</button>  |
          <!-- 23 romance -->
          <button :disabled="selected_genre_id_1.includes(2) " @click="selectOption1([2,8,6,27])">부모님의 복수를 한다</button>
          <!-- 8 revenge / 6 organized crime / 27 action-->
        </div>
       <br>
        <div v-if="selectedOption1.includes(2)">
          <h4>crime 장르 선택!</h4>
        </div>
        <div v-else-if="selectedOption1.includes(23)">
          <h4>romance 장르 선택!</h4>
        </div>
      </div>
    <hr>
      <div>
        <div>
          <h3>다시 태어난다면, 나는?</h3>
          <br>
        </div>
        <div>
          <button :disabled="selected_genre_id_2.includes(61)" @click="selectOption2([61])">이 세상을 한 번 더 살아보겠다</button>  |
          <!-- 16, 21 빼고 다 -->
          <button :disabled="selected_genre_id_2.includes(16)" @click="selectOption2([16, 21])">이 세상은 지겹다</button>
          <!-- 16 animation / 21 anime -->
        </div>
      </div>
    <br>
      <div v-if="selectedOption2.includes(16)">
        <h4>animation 장르 선택!</h4>
      </div>
      <div v-else-if="selectedOption2.includes(61)">
        <h4>reality 장르 선택!</h4>
      </div>
    <hr>
      <div>
        <div>
          <h3>SSAFY 1학기를 마친 후, 황금같은 일주일의 방학!
            <br>
            나는 일주일 간 여행을 떠난다, 어디로?
          </h3>
        </div>
          <br>
        <div>
          <button :disabled="selected_genre_id_3.includes(41)" @click="selectOption3([41])">일본</button>  |
          <button :disabled="selected_genre_id_3.includes(3)" @click="selectOption3([3])">이탈리아</button>  |
          <button :disabled="selected_genre_id_3.includes(31) || selectedOption3.includes(32) || selectedOption3.includes(38)" @click="selectOption3([31, 32, 38])">미국</button> 
          <!-- 31 los angeles / 32 california / 38 new york-->
        </div>
      <br>
        <div v-if="selectedOption3.includes(41)">
            <h4>japan 장르 선택!</h4>
        </div>
        <div v-else-if="selectedOption3.includes(3)">
          <h4>italy 장르 선택!</h4>
        </div> 
        <div v-else-if="selectedOption3.includes(31)">
          <h4>usa 장르 선택!</h4>
        </div> 
      </div>
      <hr>
      <div>
        <div>
          <h3>기차가 나에게 달려온다. 내겐 버튼이 있다.
            <br>
            이 버튼을 누르면 선로의 방향이 바뀐다. 나는 한 명이고 저쪽엔 5명이다.
          </h3>
        </div>
          <br>
        <div>
          <button :disabled="selected_genre_id_4.includes(11)" @click="selectOption4([11, 28, 57])">누르지 않는다</button>  |
          <!-- 11 hero / 28 superhero / 57 marvel -->
          <button :disabled="selected_genre_id_4.includes(39)" @click="selectOption4([39])">누른다</button>
        </div>
      <br>
        <div v-if="selectedOption4.includes(11)">
          <h4>hero 장르 선택!</h4>
        </div>
        <div v-else-if="selectedOption4.includes(39)">
          <h4>murder 장르 선택!</h4>
        </div>
      </div>
     <hr>
      <div>
        <div>
          <h3>친구의 연인을 사랑하게 됐다.
            <br>
            사랑과 우정 사이, 내 선택은?
          </h3>
        </div>
          <br>
        <div>
          <button :disabled="selected_genre_id_5.includes(4)" @click="[selectOption5([4, 23]), selected_genre_all()]">사랑</button>  |
          <button :disabled="selected_genre_id_5.includes(34)" @click="[selectOption5([34]), selected_genre_all()]">우정</button> 
        </div>
      <br>
        <div v-if="selectedOption5.includes(23)">
            <h4>romance 장르 선택!</h4>
        </div>
        <div v-else-if="selectedOption5.includes(34)">
          <h4>friendship 장르 선택!</h4>
        </div> 
      </div>
    <div>
      <!-- {{selected_genre_id_1}}
      {{selected_genre_id_2}}
      {{selected_genre_id_3}}
      {{selected_genre_id_4}}
      {{selected_genre_id_5}} -->
      <!-- {{ selected_genre_id }} -->
    </div>
    <hr>
    <div>
      <div v-for="movie in movie_jsonData" :key="movie.id">
        <div v-if="getIntersectionCount(movie.fields.genres, selected_genre_id)">
          <h2>{{ movie.fields.title }}</h2>
          <img :src="movie.fields.poster_path" alt="Movie Poster">
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      selectedOption1: '', // 초기값은 선택되지 않은 상태로 설정
      selectedOption2: '',
      selectedOption3: '',
      selectedOption4: '',
      selectedOption5: '',

      selected_genre_id_1: [], // 선택된 장르의 옵션 값을 저장할 배열
      selected_genre_id_2: [],
      selected_genre_id_3: [],
      selected_genre_id_4: [],
      selected_genre_id_5: [],
      selected_genre_id: [],  // 정의 안 하고 시작하면 undefined로 오류 뜸

      movie_jsonData: null,
      genre_jsonData: null,
    }
  },
  
  methods: {
    selectOption1(option) { // 각 문제에 대한 답을 각각의 리스트로
      this.selectedOption1 = option
      for (let i = 0; i < option.length; i++) {
        this.selected_genre_id_1.push(option[i])
      }
    },
    selectOption2(option) {
      this.selectedOption2 = option
      for (let i = 0; i < option.length; i++) {
        this.selected_genre_id_2.push(option[i])
      }
    },
    selectOption3(option) {
      this.selectedOption3 = option
      for (let i = 0; i < option.length; i++) {
        this.selected_genre_id_3.push(option[i])
      }
    },
    selectOption4(option) {
      this.selectedOption4 = option
      for (let i = 0; i < option.length; i++) {
        this.selected_genre_id_4.push(option[i])
      }
    },
    selectOption5(option) {
      this.selectedOption5 = option
      for (let i = 0; i < option.length; i++) {
        this.selected_genre_id_5.push(option[i])
      }
    },
    selected_genre_all() {
      this.genre_lst = [...this.selected_genre_id_1, ...this.selected_genre_id_2, ...this.selected_genre_id_3, ...this.selected_genre_id_4, ...this.selected_genre_id_5]
      // console.log(this.genre_lst)
      this.selected_genre_id = [... new Set(this.genre_lst)]  // 증복제거
    },
    selectMovie() {

    },
    loadJsonData() {
      axios.get('/movie_list.json')
        .then(response => {
          this.movie_jsonData = response.data
          // console.log(this.movie_jsonData); // JSON 데이터를 확인하거나 다른 작업 수행
        })
        .catch(error => {
          console.error(error)
        })
      axios.get('/genre_list.json')
        .then(response => {
          this.genre_jsonData = response.data
          // console.log(this.genre_jsonData); // JSON 데이터를 확인하거나 다른 작업 수행
        })
        .catch(error => {
          console.error(error)
        })
    },
    getIntersectionCount(list1, list2) {
      const intersection = list1.filter(item => list2.includes(item))
      if (intersection.length >= 3) { // 선택지에 있는 장르 중 3개 이상의 키워드를 가진 영화
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    this.loadJsonData()
  },
}
</script>

<style>
h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

button {
  padding: 8px 16px;
  margin-right: 10px;
  font-size: 16px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d0d0d0;
}

h4 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}
</style>