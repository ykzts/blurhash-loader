<template>
  <div id="app">
    <main class="content">
      <h1>blurhash-loader demo</h1>

      <BlurHashImage
        alt=""
        :hash="photo.hash"
        height="600"
        :src="photo.src"
        width="800"
      />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BlurHashImage } from 'vue-blurhash'
import photoURL, { blurhash } from '../photos/ramen.jpg'

import 'vue-blurhash/dist/vue-blurhash.css'

export default Vue.extend({
  components: {
    BlurHashImage
  },
  data() {
    return {
      photo: {
        hash: blurhash,
        src: photoURL
      }
    }
  },
  name: 'App'
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
}
</style>
