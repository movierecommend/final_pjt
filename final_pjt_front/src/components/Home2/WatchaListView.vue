<template>
  <div>
    <h1>Watcha 영화 순위</h1>
    <div v-for="movie in watchaData" :key="movie.title">
      <img :src="movie.poster" alt="Movie Poster" />
      <h3>{{ movie.title }}</h3>
    </div>
  </div>
</template>

<script>
import watchaData from '../../assets/movie_ranking/watcha_list.json'

export default {
  data() {
    return {
      watchaData: watchaData,
    }
  },
}
</script>
