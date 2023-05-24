<template>
  <div>
    <div v-if="!selectedOption">
      <div v-for="option in options" :key="option.value">
        <button @click="selectOption(option.value)">{{ option.label }}</button>
      </div>
    </div>
    <div v-else>
      <p>선택한 옵션: {{ selectedOption }}</p>
      <button @click="nextQuestion">다음 질문</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: '', // 선택한 옵션을 저장할 변수
      options: [
        { label: '옵션 1', value: 'option1' },
        { label: '옵션 2', value: 'option2' },
        { label: '옵션 3', value: 'option3' }
      ], // 선택지 옵션 배열
      currentQuestionIndex: 0, // 현재 질문의 인덱스
      questions: [
        '질문 1',
        '질문 2',
        '질문 3'
      ] // 질문 배열
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option; // 선택한 옵션을 업데이트
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++; // 다음 질문으로 인덱스 증가
        this.selectedOption = ''; // 선택한 옵션 초기화
      } else {
        // 마지막 질문에 도달했을 때 추가적인 처리
        // 예: 결과 표시, 폼 제출 등
      }
    }
  }
};
</script>
