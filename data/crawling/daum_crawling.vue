<template>
    <div>
      <h2>OTT 서비스 순위</h2>
      <ul>
        <li v-for="(movie, index) in movies" :key="index">
          <div>
            <span>{{ index + 1 }}위: {{ movie.rank }}</span>
          </div>
          <div>
            <img :src="movie.image" alt="영화 포스터">
          </div>
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
      this.fetchMovieData();
    },
    methods: {
      fetchMovieData() {
        const url = 'https://movie.daum.net/main/new#slide-1-0';
        axios.get(url)
          .then(response => {
            const html = response.data;
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const rankElements = doc.querySelectorAll('strong.rank_num');
            const imageElements = doc.querySelectorAll('img.lazy_img');
  
            const movies = [];
            for (let i = 0; i < rankElements.length; i++) {
              const rank = rankElements[i].textContent;
              const image = imageElements[i].getAttribute('data-src');
              movies.push({ rank, image });
            }
  
            this.movies = movies;
          })
          .catch(error => {
            console.error('Error fetching movie data:', error);
          });
      },
    },
  };
  </script>
  