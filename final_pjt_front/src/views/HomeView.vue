<template>
  <div>
    <boxoffice-daily />
  </div>
</template>


<script>
import BoxofficeDaily from '@/components/Home/BoxofficeDaily.vue'

export default {
  name: 'HomeView',
  components: {
    BoxofficeDaily,    
  },
  data() {
    return {
    }
  }
}

</script>