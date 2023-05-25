<template>
  <div>
    <h1>Recommendation Page</h1>

        <RecommendSelectView />
        <!-- <TestListView /> -->
  </div>
</template>

<script>
import RecommendSelectView from '../components/Recommendations/RecommendSelectView.vue'
// import TestListView from '../components/Recommendations/TestListView.vue'
export default {
  name: 'RecommendView',
  components: {
    RecommendSelectView,
    // TestListView
  }
}
</script>

<style>

</style>