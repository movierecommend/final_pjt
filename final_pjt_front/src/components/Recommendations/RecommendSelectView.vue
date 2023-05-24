<template>
  <div>
    <hr>
      <div>
        <div>
          <h3>외나무다리에서 만난 내 부모님의 원수의 딸(아들), 
            <br>
            절세미녀(남)인 그녀(그)에게 나는?</h3>
            <br>
        </div>

        <div>
          <button :disabled="selected_genre_id.includes(23)" @click="selectOption([23])">사랑에 빠진다</button>  |
          <!-- 23 romance -->
          <button :disabled="selected_genre_id.includes(2) || selectedOption.includes(8) || selectedOption.includes(6) || selectedOption.includes(27)" @click="selectOption([2,8,6,27])">부모님의 복수를 한다</button>
          <!-- 8 revenge / 6 organized crime / 27 action-->
        </div>
       <br>
        <div v-if="selectedOption.includes(2)">
          <h4>crime 장르 선택!</h4>
        </div>
        <div v-else-if="selectedOption.includes(23)">
          <h4>romance 장르 선택!</h4>
        </div>
      </div>
      

    <hr>
      <div>
        <div>
          <h3>다시 태어난다면, 나는?</h3>
          <br>
        </div>
        <div>
          <button @click="selectOption([])">이 세상을 한 번 더 살아보겠다</button>  |
          <!-- 16, 21 빼고 다 -->
          <button :disabled="selectedOption.includes(16) || selectedOption.includes(21)" @click="selectOption([16, 21])">이 세상은 지겹다</button>
          <!-- 16 animation / 21 anime -->
        </div>
      </div>
    <br>
      <div v-if="selectedOption.includes(16)">
        <h4>animation 장르 선택!</h4>
      </div>
      <div v-else-if="!selectedOption.includes(16)">
        <!-- <h4>reality 장르 선택!</h4> -->
      </div>

    <hr>

      <div>
        <div>
          <h3>SSAFY 1학기를 마친 후, 황금같은 일주일의 방학!
            <br>
            나는 일주일 간 여행을 떠난다, 어디로?
          </h3>
        </div>
          <br>
        <div>
          <button :disabled="selectedOption.includes(41)" @click="selectOption([41])">일본</button>  |
          <button :disabled="selectedOption.includes(3)" @click="selectOption([3])">이탈리아</button>  |
          <button :disabled="selectedOption.includes(31) || selectedOption.includes(32) || selectedOption.includes(38)" @click="selectOption([31, 32, 38])">미국</button> 
          <!-- 31 los angeles / 32 california / 38 new york-->
        </div>
      <br>
        <div v-if="selectedOption.includes(41)">
            <h4>japan 장르 선택!</h4>
        </div>
        <div v-else-if="selectedOption.includes(3)">
          <h4>italy 장르 선택!</h4>
        </div> 
        <div v-else-if="selectedOption.includes(31)">
          <h4>usa 장르 선택!</h4>
        </div> 
      </div>
      <hr>

      <div>
        <div>
          <h3>기차가 나에게 달려온다. 내겐 버튼이 있다.
            <br>
            이 버튼을 누르면 선로의 방향이 바뀐다. 나는 한 명이고 저쪽엔 5명이다.
          </h3>
        </div>
          <br>
        <div>
          <button @click="selectOption([11, 28, 57])">누르지 않는다</button>  |
          <!-- 11 hero / 28 superhero / 57 marvel -->
          <button @click="selectOption([])">누른다</button>
        </div>
      <br>
        <div v-if="selectedOption.includes(11)">
          <h4>hero 장르 선택!</h4>
        </div>
        <div v-else>
          <!-- <h4>hero 장르 미선택!</h4> -->
        </div>
      </div>

     <hr>

      
      <div>
        <div>
          <h3>친구의 연인을 사랑하게 됐다.
            <br>
            사랑과 우정 사이, 내 선택은?
          </h3>
        </div>
          <br>
        <div>
          <button @click="selectOption([4, 23])">사랑</button>  |
          <button @click="selectOption([34])">우정</button> 
        </div>
      <br>
        <div v-if="selectedOption.includes(23)">
            <h4>romance 장르 선택!</h4>
        </div>
        <div v-else-if="selectedOption.includes(34)">
          <h4>friendship 장르 선택!</h4>
        </div> 
      </div>

      <!-- <div>
        <div>
          <h3>나는 지금 타임머신에 올라탔다.
            <br>
            과거로 갈까 미래로 갈까
          </h3>
        </div>
          <br>
        <div>
          <button @click="selectOption('9')">과거</button>  |-->
          <!-- 12 world war ii -->
          <!-- 14 biography -->
          <!-- 15 based on true story -->
          <!-- 35 past -->
          <!-- <button @click="selectOption('49')">누른다</button> -->
          <!-- 20 magic -->
          <!-- 29  -->
        <!-- </div>
      <br>
        <div v-if="selectedOption === '9'">
          <h4>history 장르 선택!</h4>
        </div>
        <div v-else-if="selectedOption === '49'">
          <h4>science fiction 장르 선택!</h4>
        </div>
      </div> 
     <hr>  -->

  {{selected_genre_id}}

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: '', // 초기값은 선택되지 않은 상태로 설정
      selected_genre_id: [] // 선택된 장르의 옵션 값을 저장할 배열
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option
      for (let i = 0; i < option.length; i++) {
        this.selected_genre_id.push(option[i])
      }
    },
    selectMovie() {

    }
  }
  
}
</script>

<style>
h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

button {
  padding: 8px 16px;
  margin-right: 10px;
  font-size: 16px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d0d0d0;
}

h4 {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}
</style>