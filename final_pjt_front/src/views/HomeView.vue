<template>
  <div>
    <boxoffice-daily></boxoffice-daily>
    <h1>Home Page</h1>
    <WatchaListView />
    <NetflixListView />
  </div>
</template>


<script>
import BoxofficeDaily from '@/components/Home/BoxofficeDaily.vue'
import WatchaListView from '../components/Home2/WatchaListView.vue'
import NetflixListView from '../components/Home2/NetflixListView.vue'

export default {
  name: 'HomeView',
  components: {
    BoxofficeDaily
    WatchaListView,
    NetflixListView,
  },
  data() {
    return {
      
    }
  },
  methods: {
  }
}

</script>