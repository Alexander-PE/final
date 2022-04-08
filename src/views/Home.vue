<template>
  <div class="home">
      <Poster/>
      <Trailers/>
  </div>
</template>

<script>
// @ is an alias to /src
import Poster from '@/components/Poster.vue'
import Trailers from '@/components/Trailers.vue'

export default {
  name: 'Home',
  components: {
    Poster,
    Trailers,
  }

}
</script>

<style scoped>
*{
  background: #141414;
}

</style>