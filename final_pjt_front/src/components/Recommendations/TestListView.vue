<template>
  <div>
    <h1>{{ currentQuestion.question }}</h1>
    <div v-if="!isAnswered">
      <button v-for="(choice, i) in currentQuestion.choices" :key="i" @click="selectChoice(choice, i)">
        {{ choice }}
      </button>
    </div>
    <div v-else>
      <h2>{{ selectedChoice }}</h2>
      <button v-if="currentQuestionIndex < questions.length - 1" @click="nextQuestion">다음 문제</button>
      <button v-else @click="selected_genre_all">결과</button>
    </div>

    <div v-if="isAnswered && isResult && selected_genre_id.length > 0">
      <div v-for="movie in filteredMovies" :key="movie.id">
        <h2>{{ movie.fields.title }}</h2>
        <img :src="movie.fields.poster_path" alt="Movie Poster">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      selected_genre_id: [],
      movie_jsonData: null,
      genre_jsonData: null,

      questions: [
        {
          question: '외나무다리에서 만난 내 부모님의 원수의 딸(아들), 절세미녀(남)인 그녀(그)에게 나는?',
          choices: ['사랑에 빠진다', '부모님의 복수를 한다'],
          genres: [23, 2, 8, 6, 27],
          results: ['romance 장르 선택!', 'crime 장르 선택!']
        },
        {
          question: '다시 태어난다면, 나는?',
          choices: ['이 세상을 한 번 더 살아보겠다', '이 세상은 지겹다'],
          genres: [61, 16],
          results: ['reality 장르 선택!', 'animation 장르 선택!']
        },
        {
          question: 'SSAFY 1학기를 마친 후, 황금같은 일주일의 방학! 일주일 간 여행을 떠난다, 어디로?',
          choices: ['일본', '이탈리아','미국'],
          genres: [41, 3, 31],
          results: ['Japan 선택', 'Italy 선택!', 'America 선택!']
        },
        {
          question: '기차가 나에게 달려온다. 내겐 버튼이 있다. 이 버튼을 누르면 선로의 방향이 바뀐다. 나는 한 명이고 저쪽엔 5명이다.',
          choices: ['누르지 않는다', '누른다'],
          genres: [11, 39],
          results: ['hero 장르 선택!', 'murder 장르 선택!']
        },
        {
          question: '친구의 연인을 사랑하게 됐다. 사랑과 우정 사이, 내 선택은?',
          choices: ['사랑', '우정'],
          genres: [23, 34],
          results: ['romance 장르 선택!', 'friendship 장르 선택!']
        }
      ],
      currentQuestionIndex: 0,
      isAnswered: false,
      selectedChoice: null,
      isResult: false,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    filteredMovies() {
      if (this.movie_jsonData && this.selected_genre_id.length > 0) {
        console.log('g')
        return this.movie_jsonData.filter((movie) => {
          return this.getIntersectionCount(movie.fields.genres, this.selected_genre_id);
        });
      } else {
        return [];
      }
    }
  },
  methods: {
    selectChoice(choice, i) {
      this.selectedChoice = this.currentQuestion.results[i];
      this.isAnswered = true;
      if (i > 0) {
        this.selected_genre_id.push(...this.currentQuestion.genres.slice(i))
      } else {
        this.selected_genre_id.push(this.currentQuestion.genres[i])
      }
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      this.isAnswered = false;
      this.selectedChoice = null;
    },
    selected_genre_all() {
      this.selected_genre_id = [...new Set(this.selected_genre_id)];
      console.log(this.selected_genre_id)
      this.isResult = true;
    },
    loadJsonData() {
      axios.get('/movie_list.json')
        .then(response => {
          this.movie_jsonData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
      axios.get('/genre_list.json')
        .then(response => {
          this.genre_jsonData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getIntersectionCount(list1, list2) {
      const intersection = list1.filter(item => list2.includes(item));
      return intersection.length >= 3;
    },
  },
  mounted() {
    this.loadJsonData();
  },
};
</script>
