<template>
  <div>
    <div v-if="!showNextContent">
      <video ref="videoPlayer" src="/Recommendation.mp4" controls autoplay @ended="playbackEnded"></video>
    </div>
    <div v-else>
      <div class="d-container">
        <div v-if="!isAnswered" class="question-container">
          <h1>{{ currentQuestion.question }}</h1>
        </div>
        <div class="answer-container" v-else>
          <button v-for="(choice, i) in currentQuestion.choices" :key="i" @click="selectChoice(choice, i)" :class="{ 'selected': selectedChoice === choice }" class="button-option">
            <!-- {{ choice }} -->
            <!-- <span v-if="selectedChoice === choice" class="selected-choice">{{ selectedChoice }}</span> -->
          </button>
          
          <button v-if="currentQuestionIndex < questions.length - 1" @click="nextQuestion" class="button-next">Next</button>
          <button v-else @click="showRandomMovie" class="button-findout">Find out!</button>
        </div>
        <div class="button-container">
          <button v-for="(choice, i) in currentQuestion.choices" :key="i" @click="selectChoice(choice, i)" class="button-option">
            {{ choice }}
          </button>
        </div>
      </div>
      <div v-if="showPopup" class="popup-overlay" v-on:click="closePopup">
        <div class="popup-content">
          <h2>{{ randomMovie.fields.title }}</h2>
          <img :src="randomMovie.fields.poster_path" alt="Movie Poster">
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
      selected_genre_id: [],
      movie_jsonData: null,
      genre_jsonData: null,
      showPopup: false,
      randomMovie: null,
      showNextContent: false,
      questions: [
        {
          question: '외나무다리에서 만난 내 부모님의 원수의 딸(아들), 절세미녀(남)인 그녀(그)에게 나는?',
          choices: ['사랑에 빠진다', '복수를 한다'],
          genres: [23, 2, 8, 6, 27, 17],
          results: ['romance 장르 선택!', 'crime 장르 선택!']
        },
        {
          question: '다시 태어난다면, 나는?',
          choices: ['이 세상을 한 번 더 살아보겠다', '이 세상은 지겹다'],
          genres: [61, 16, 21],
          results: ['reality 장르 선택!', 'animation 장르 선택!']
        },
        {
          question: 'SSAFY 1학기를 마친 후, 황금같은 일주일의 방학! \n 일주일 간 여행을 떠난다, 어디로?',
          choices: ['일본', '이탈리아','미국'],
          genres: [41, 3, 31],
          results: ['Japan 선택', 'Italy 선택!', 'America 선택!']
        },
        {
          question: '기차가 나에게 달려온다. 내겐 버튼이 있다. 이 버튼을 누르면 선로의 방향이 바뀐다. 나는 한 명이고 저쪽엔 5명이다.',
          choices: ['누르지 않는다', '누른다'],
          genres: [11, 39, 48],
          results: ['hero 장르 선택!', 'murder 장르 선택!']
        },
        {
          question: '친구의 연인을 사랑하게 됐다. 사랑과 우정 사이, 내 선택은?',
          choices: ['사랑', '우정'],
          genres: [23, 34, 1, 24],
          results: ['romance 장르 선택!', 'friendship 장르 선택!']
        }
      ],
      currentQuestionIndex: 0,
      isAnswered: false,
      selectedChoice: null,
      isResult: false
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    filteredMovies() {
      if (this.movie_jsonData && this.selected_genre_id.length > 0) {
        // console.log('g')
        return this.movie_jsonData.filter((movie) => {
          return this.getIntersectionCount(movie.fields.genres, this.selected_genre_id);
        })
      } else {
        return []
      }
    }
  },
  methods: {
    selectChoice(choice, i) {
      this.selectedChoice = this.currentQuestion.results[i];
      this.isAnswered = true
      if (i > 0) {
        this.selected_genre_id.push(...this.currentQuestion.genres.slice(i))
      } else {
        this.selected_genre_id.push(this.currentQuestion.genres[i])
      }
      this.currentQuestion.choices[i] = this.selectedChoice;
    },
    nextQuestion() {
      this.currentQuestionIndex++
      this.isAnswered = false
      this.selectedChoice = null
    },
    selected_genre_all() {
      this.selected_genre_id = [...new Set(this.selected_genre_id)];
      // console.log(this.selected_genre_id)
      this.isResult = true
    },
    loadJsonData() {
      axios.get('/movie_list.json')
        .then(response => {
          this.movie_jsonData = response.data;
        })
        .catch(error => {
          console.error(error)
        });
      axios.get('/genre_list.json')
        .then(response => {
          this.genre_jsonData = response.data;
        })
        .catch(error => {
          console.error(error)
        })
    },
    getIntersectionCount(list1, list2) {
      const intersection = list1.filter(item => list2.includes(item));
      return intersection.length >= 4
    },
    showRandomMovie() {
      const filteredMovies = this.filteredMovies;
      if (filteredMovies.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredMovies.length);
        this.randomMovie = filteredMovies[randomIndex];
        this.showPopup = true;
        this.selected_genre_all()
      }
    },
    closePopup() {
      this.showPopup = false;
      this.randomMovie = null;
    },
    playbackEnded() {
      this.showNextContent = true;

    }
  },
  mounted() {
    this.loadJsonData();
    const videoElement = this.$refs.videoPlayer;
    videoElement.addEventListener('ended', this.playbackEnded);
  },
  beforeUnmount() {
    const videoElement = this.$refs.videoPlayer;
    videoElement.removeEventListener('ended', this.playbackEnded);
  }
}

</script>

<style>
@font-face {
  font-family: 'dh';
  src:url('../../../public/fonts/BMDOHYEON_ttf.ttf')
}
.d-container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(219, 214, 214);
  font-family: 'dh';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.question-container {
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  background-color: rgb(219, 214, 214);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.answer-container {
  width: 100%;
  height: 150px;
  background-color: rgb(219, 214, 214);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'dh';
}
video {
  width: 100%;
}
.container h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  font-family: 'dh';
}
.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
}

.button-option {
  padding: 8px 16px;
  margin: 10px;
  font-size: 50px;
  background-color: #df596b;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'dh';
}
.button-option.selected {
  background-color: #7a7070;
}
/* .selected {
  background-color: #7a7070;
  color: #9e8b8b;
} */
.selected-choice {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  font-family: 'dh';
}
.button-next {
  padding: 8px 16px;
  margin-right: 10px;
  font-size: 16px;
  background-color: #cfc5c5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'dh';
}
.button-findout {
  padding: 8px 16px;
  margin-right: 10px;
  font-size: 16px;
  background-color: #e6724f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'dh';
}

button:hover {
  background-color: #7a7070;
}

h4 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  
  font-family: 'dh';
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-family: 'dh';
}

.popup-content {
  background-color: white;
  padding: 20px;
  text-align: center;
  font-family: 'dh';
}

.popup-content img {
  width: 400px;
  height: auto;
  margin-bottom: 10px;
}
</style>