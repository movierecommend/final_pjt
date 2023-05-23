<template>
  <div>
    <h1>Home Page</h1>
    <WatchaListView />
    <NetflixListView />
  </div>
</template>


<script>
import WatchaListView from '../components/Home2/WatchaListView.vue'
import NetflixListView from '../components/Home2/NetflixListView.vue'

export default {
  name: 'HomeView',
  components: {
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


// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>
