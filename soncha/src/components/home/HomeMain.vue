<template>
  <div
    v-show="!isLoading"
    class="main__movie-list">
    <div class="main__movie-items-wrapper">
      <div class="main__movie-items">
        <ContentMovieItem
          v-for="movieItem in movieList"
          :key="`item_${movieItem.imdbID}`"
          :movie-item="movieItem"
          @showDetail="showDetail" />
      </div>
    </div>
    <!-- <div class="main__movie-pagination">
      more
    </div> -->
  </div>
</template>

<script>
import ContentMovieItem from '@/components/content/ContentMovieItem'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    ContentMovieItem
  },
  data () {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState(['movieList', 'totalLength', 'searchParams'])
  },
  watch: {
    async $route () {
      if (this.$route.name === 'Detail') {
        return
      }

      const keyword = this.$route.query.search
      const page = this.$route.query.page
      await this.fetchMovieList({ keyword, page })
      this.emitter.emit('hide:spinner')
      this.isLoading = false
    }
  },
  created () {
    this.init()
  },
  methods: {
    ...mapMutations(['SET_CURRENTMOVIE']),
    ...mapActions(['fetchMovieList']),
    async init () {
      const isNotInit = !!Object.keys(this.$route.query).length
      const keyword = isNotInit ? this.$route.query.search : this.searchParams.keyword
      const page = isNotInit ? this.$route.query.page : this.searchParams.page

      this.$router.replace(`?search=${keyword}&page=${page}`)
      await this.fetchMovieList({ keyword, page })
      this.emitter.emit('hide:spinner')
      this.isLoading = false
    },
    showDetail (movieId) {
      this.SET_CURRENTMOVIE(movieId)
      this.$router.push(`/movie/${movieId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.main__movie-items-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main__movie-items {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(6, 1fr);
  grid-gap: 20px;
  grid-auto-flow: row dense;
  justify-content: center;
}
.movie-pagination {
  padding: 0 10px;
}
</style>
