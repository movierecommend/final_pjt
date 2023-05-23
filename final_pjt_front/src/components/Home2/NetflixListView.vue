<template>
  <div>
    <h1>Netflix 영화 순위</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.rank">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.fetchNetflixRanking();
  },
  methods: {
    fetchNetflixRanking() {
      axios.get('/api/netflix_ranking/')
        .then(response => {
          this.movies = response.data;
        })
        .catch(error => {
          console.error('Failed to fetch Netflix ranking:', error);
        });
    },
  },
};
</script>
