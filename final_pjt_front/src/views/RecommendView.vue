<template>
  <div>
    <h1>Recommendation Page</h1>

        <RecommendSelectView />
  </div>
</template>

<script>
import RecommendSelectView from '../components/Recommendations/RecommendSelectView.vue'

export default {
  name: 'RecommendView',
  components: {
    RecommendSelectView,
  }
}
</script>

<style>

</style>