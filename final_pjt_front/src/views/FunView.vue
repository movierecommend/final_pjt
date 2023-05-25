<template>
  <div>
    <br>
    <h2>내가 영화 캐릭터라면?</h2>
    <div class="container">
      <div v-for="option in optionsEI" :key="option.id">
        <label :for="option.id" @click="selectOptionEI(option)">
          <img :src="option.image" :class="{'checked': selectedOptionEI === option}" />

        <input type="radio" :id="option.id" :value="option.value" v-model="selectedValueEI" hidden />
      </label>
    </div>
    <div v-for="option in optionsNS" :key="option.id">
        <label :for="option.id" @click="selectOptionNS(option)">
          <img :src="option.image" :class="{'checked': selectedOptionNS === option}" />
        <input type="radio" :id="option.id" :value="option.value" v-model="selectedValueNS" hidden />
      </label>
    </div>
    <div v-for="option in optionsTF" :key="option.id">
        <label :for="option.id" @click="selectOptionTF(option)">
          <img :src="option.image" :class="{'checked': selectedOptionTF === option}" />
        <input type="radio" :id="option.id" :value="option.value" v-model="selectedValueTF" hidden />
      </label>
    </div>
    <div v-for="option in optionsPJ" :key="option.id">
        <label :for="option.id" @click="selectOptionPJ(option)">
          <img style="width: 204px;" :src="option.image" :class="{'checked': selectedOptionPJ === option}" />
        <input type="radio" :id="option.id" :value="option.value" v-model="selectedValuePJ" hidden />
      </label>
    </div>
  </div>

    <div>
      
      <button @click="findYourMBTI()">확인</button>
      <div>
        <div v-for="mbti in mbti_jsonData" :key="mbti.id">
          <div v-if="mbti.fields.MBTI === yourMBTI">
            {{ mbti.fields.character }}
            <img class="result" :src="mbti.fields.image" alt="MBTI 이미지">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      yourMBTI: '',
      mbti_jsonData: [],
      selectedOptionEI: null,
      selectedValueEI: '',
      selectedOptionNS: null,
      selectedValueNS: '',
      selectedOptionTF: null,
      selectedValueTF: '',
      selectedOptionPJ: null,
      selectedValuePJ: '',
      optionsEI: [
        { id: 1, image: './E.png', value: 'E' },
        { id: 2, image: './I.png', value: 'I' },
      ],
      optionsNS: [
        { id: 3, image: './N.png', value: 'N' },
        { id: 4, image: './S.png', value: 'S' },
      ],
      optionsTF: [
        { id: 5, image: './T.png', value: 'T' },
        { id: 6, image: './F.png', value: 'F' },
      ],
      optionsPJ: [
        { id: 7, image: './P.png', value: 'P' },
        { id: 8, image: './J.png', value: 'J' },
      ],
    }
  },
  methods: {
    loadJsonData() {
      axios.get('/mbti.json')
        .then(response => {
          this.mbti_jsonData = response.data
          console.log(this.mbti_jsonData)
        })
        .catch(error => {
          console.error(error)
        })
    },
    filterByMBTI() {
      const filteredCharacters = this.mbti_jsonData.filter(mbti => mbti.fields.MBTI === this.inputMBTI)
      filteredCharacters.forEach(character => {
        console.log(character.fields.character)
      })
    },
    selectOptionEI(option) {
        this.selectedOptionEI = option
        this.selectedValueEI = option.value
    },
    selectOptionNS(option) {
        this.selectedOptionNS = option
        this.selectedValueNS = option.value
    },
    selectOptionTF(option) {
        this.selectedOptionTF = option
        this.selectedValueTF = option.value
    },
    selectOptionPJ(option) {
        this.selectedOptionPJ = option
        this.selectedValuePJ = option.value
    },
    findYourMBTI() {
      this.yourMBTI = this.selectedValueEI + this.selectedValueNS + this.selectedValueTF + this.selectedValuePJ
    }
  },
  mounted() {
    this.loadJsonData()
  }
}
</script>


<style>
img {
  width: 150px;
  height: 150px;
}

.result {
  width: 150px;
  height: 150px;
  border: 1px solid #d8d8d8;
  /* width: 70%; */
  box-shadow: 0px 0.5px 1px #d8d8d8;
  display: block;
  /* width: 100%; */
  vertical-align: top;
  border-radius: 8px;

}
.checked {
  border: 4px solid rgb(255, 242, 65);
  box-sizing: border-box;
  width: 150px;
  height: 150px;
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.container > div {
  flex: 1;
  margin-right: 10px;
}
</style>