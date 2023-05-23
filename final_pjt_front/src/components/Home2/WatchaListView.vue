<template>
  <div>
    <h2>Watcha 영화 순위</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.rank">
        <span>{{ movie.rank }}</span>
        <span>{{ movie.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      movies: [], // Watcha 영화 데이터를 저장할 배열
    }
  },
  mounted() {
    // Watcha 영화 순위 데이터를 가져오기 위해 API 요청 보냄
    axios.get('https://pedia.watcha.com/ko-KR')
      .then(response => {
        // HTML 파싱을 위해 DOMParser 객체 생성
        const parser = new DOMParser()
        const htmlDoc = parser.parseFromString(response.data, 'text/html')
        // 영화 순위 요소들을 선택하여 데이터 추출
        const movieElements = htmlDoc.querySelectorAll('.css-174lxc3 .css-5yuqaa')
        const movies = []
        movieElements.forEach((element, index) => {
          movies.push({
            rank: index + 1,
            title: element.textContent.trim(),
          })
        })
        this.movies = movies // 데이터를 컴포넌트의 movies에 할당
      })
      .catch(error => {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error)
      })
  },
}
</script>
