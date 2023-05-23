<!-- WatchaListView.vue -->
<template>
  <div>
    <ul>
      <li v-for="item in watchaList" :key="item.title">
        <img :src="item.poster" alt="Poster" />
        <h3>{{ item.title }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import watchaListData from './watcha_list.json';

export default {
  data() {
    return {
      watchaList: watchaListData
    };
  }
};
</script>
