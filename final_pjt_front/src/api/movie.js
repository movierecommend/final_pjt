import api from "./api"

export default {
  // actor: 배우 목록 전체
  actors() {
    return api({
      method: "get",
      url: "movies/actors/",
    })
  },
  // actor(id) {
  //   return api({
  //     method: "get",
  //     url: `movies/actors/${id}`,
  //   })
  // },
  // genre
  genre(id) {
    return api({
      method: "get",
      url: `movies/genre/${id}`,
    })
  },
  // movie
  movie(id) {
    return api({
      method: "get",
      url: `movies/${id}`,
    })
  },
  movie_like(id) {
    return api({
      method: "post",
      url: `movies/${id}/like/`,
    })
  },
  search(movie_name) {
    return api({
      method: "get",
      url: `movies/${movie_name}`,
    })
  },
}