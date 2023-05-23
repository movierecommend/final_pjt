<template>
  <div>
    <h1>전체 영화 데이터</h1>
    <ul>
      <li v-for="fixture in fixtures" :key="fixture.id">
        {{ fixture.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixtures: [], // fixtures 데이터를 저장할 배열
    };
  },
  mounted() {
    // JSON 파일 가져오기
    fetch('/movie_list.json')
    // .json() 메서드를 사용하여 데이터를 JavaScript 객체로 변환
      .then(response => response.json())
      // .then(console.log(this.fixtures))
      .then(data => {
        this.fixtures = data; // 데이터를 컴포넌트의 fixtures에 할당
      })
      .catch(error => {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
      });
  },
};
</script>
