import movie from "@/api/movie"
import router from "@/router"

export default {
  namespaced: true,
  state: {
    actors: [],
    // actor: { name: "", profile_path: "", movies: []},
    movie: [],
    recommendationMovies: [],
    similarMovies: [],
    search: [],
  },
  getters: {
    // actors: (state) => state.actors,
    article: (state) => state.article,
    movie: (state) => state.movie,
    search: (state) => state.search,
  },
  mutations: {
    // SET_ACTORS: (state, actors) => (state.actors = actors),
    SET_MOVIE: (state, movie) => (state.movie = movie),
    SET_SEARCH: (state, search) => (state.search = search),
  },
  actions: {
    // fetchActors({ commit }) {
    //   movie
    //     .actors()
    //     .then((res) => {
    //       commit("SET_ACTORS", res.data);
    //     })
    //     .catch((err) => console.error(err.response));
    // },
    fetchMovie({ commit }, { moviePk }) {
      movie
        .movie(moviePk)
        .then((res) => {
          commit("SET_MOVIE", res.data);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" });
          }
        })
    },
    movieLike({ commit }, moviePk) {
      movie
        .movie_like(moviePk)
        .then((res) => {
          commit("SET_MOVIE", res.data);
        })
        .catch((err) => console.error(err.response))
    },
    recommendation({ commit }, {userPk}) {
      movie
        .recommendation(userPk)
        .then((res) => {
          commit("SET_RECOMMENDATION_MOVIES", res.data);
          // console.log(res.data)
        })
        .catch((err) => {
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" });
          }
        })
    },
    search({ commit }, movieName) {
      movie
        .search(movieName)
        .then((res) => {
          commit("SET_SEARCH", res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            router.push({ name: "NotFound404" });
          }
        })
    },
  }
}