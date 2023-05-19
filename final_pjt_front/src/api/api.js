// Axios를 사용하여 API 요청을 보내기 위한 기본 설정
// Axios Intercepter로 API들을 공통적으로 관리

import axios from "axios"

const HOST = "http://localhost:8000/api/v1/"

export const api = axios.create({
  baseURL: HOST,
})
// https://velog.io/@subanggu/axios-interceptor-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
// Axios Intercepter
api.interceptors.request.use(
  // 요청이 전달되기 전에 작업 수행
  function (config) {
    const token = localStorage.getItem('token')
    // token이 없는 경우 config 포함
    if (!token)
    return config
    // token 있다면 headers에 token 추가
    config.headers.Authorization = `Token ${token}` 
    return config
  }, function (error) {
    return Promise.reject(error)
})

export default api
