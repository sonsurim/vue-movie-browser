<template>
  <main>
    <div class="main__row">
      <div class="main__movie-content">
        컨텐츠
      </div>
      <div class="main__movie-img">
        이미지
      </div>
    </div>
    <div class="main__row">
      <div class="main__movie-info">
        인포
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['currentMovie']),
    name () {
      return this.data
    }
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions(['fetchMovieDetail']),
    async init () {
      const id = this.$route.params.id
      const res = this.fetchMovieDetail(id)

      console.log(this.currentMovie)
    }
  }
}
</script>

<style lang="scss" scoped>
.main__row:first-child {
  display: flex;
}
</style>
