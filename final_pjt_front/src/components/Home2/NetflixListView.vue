<template>
  <div>
    <h1>Netflix 영화 순위</h1>
    <div v-for="movie in netflixData" :key="movie.title">
      <img :src="movie.poster" alt="Movie Poster" />
      <h3>{{ movie.title }}</h3>
    </div>
  </div>
</template>

<script>
import netflixData from '../../assets/movie_ranking/netflix_list.json'

export default {
  data() {
    return {
      netflixData: netflixData,
    }
  },
}
</script>
