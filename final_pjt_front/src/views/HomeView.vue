<template>
  <div>
<<<<<<< HEAD
    <boxoffice-daily></boxoffice-daily>
    <h1>Home Page</h1>
    <WatchaListView />
    <NetflixListView />
=======
    <boxoffice-daily />
    <!-- <WatchaListView />
    <NetflixListView /> -->
>>>>>>> b250a6af5e116efc3aee1a5329cd8311f05fb05c

  </div>
</template>


<script>
import BoxofficeDaily from '@/components/Home/BoxofficeDaily.vue'
import WatchaListView from '../components/Home2/WatchaListView.vue'
import NetflixListView from '../components/Home2/NetflixListView.vue'


export default {
  name: 'HomeView',
  components: {
    BoxofficeDaily,
<<<<<<< HEAD
    WatchaListView,
    NetflixListView,
=======
    // WatchaListView,
    // NetflixListView,
>>>>>>> b250a6af5e116efc3aee1a5329cd8311f05fb05c
    
  },
  data() {
    return {
      
    }
  },
  methods: {
  }
}

</script>