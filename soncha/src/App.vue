<template>
  <div
    v-show="isLoading"
    class="main__spinner-wrapper">
    <div class="main__spinner">
      <PacmanLoader
        color="#FF3838" />
    </div>
    <div class="mask"></div>
  </div>
  <router-view />
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader'

export default {
  components: {
    PacmanLoader
  },
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    this.emitter.on('show:spinner', () => {
      this.isLoading = true
      document.querySelector('body').setAttribute('style', 'overflow: hidden')
    })
    this.emitter.on('hide:spinner', () => {
      this.isLoading = false
      document.querySelector('body').setAttribute('style', 'overflow: auto')
    })
  }
}
</script>

<style lang="scss">
body {
  background-color: #1A1A1A;
  color: #FFFFFF;
}
.main__spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 7;
}
.mask {
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .7);
}
</style>
