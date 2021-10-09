<template>
  <div
    v-show="!isLoading"
    class="main__movie-list">
    <h1 class="main__search-result">
      {{ searchResult }}
    </h1>
    <div class="main__movie-items-wrapper">
      <div class="main__movie-items">
        <ContentMovieItem
          v-for="movieItem in movieList"
          :key="`item_${movieItem.imdbID}`"
          :movie-item="movieItem"
          @showDetail="showDetail" />
        <div class="main__more">
          <img
            src="../../assets/icon_more.svg"
            alt="more"
            @click="getMoreList" />
        </div>
      </div>
    </div>
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
      isLoading: true,
      isClicked: false
    }
  },
  computed: {
    ...mapState(['movieList', 'totalLength', 'searchParams']),
    searchResult () {
      return `Search Results about "${this.searchParams.keyword}"`
    }
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
      const isInit = !!Object.keys(this.$route.query).length

      if (isInit) {
        this.fetchListUseRoute()
        return
      }

      this.fetchListUseSearch()
    },
    async fetchListUseRoute () {
      const keyword = this.$route.query.search
      const page = this.$route.query.page

      await this.fetchMovieList({ keyword, page })
      this.isLoading = false
      this.emitter.emit('hide:spinner')
    },
    async fetchListUseSearch () {
      const keyword = this.searchParams.keyword
      const page = this.searchParams.page

      await this.fetchMovieList({ keyword, page })
      this.isLoading = false
      this.emitter.emit('hide:spinner')
      this.$router.replace({ name: 'Home', query: { search: keyword, page: 1 } })
    },
    showDetail (movieId) {
      this.SET_CURRENTMOVIE(movieId)
      this.$router.push(`/movie/${movieId}`)
    },
    async getMoreList () {
      if (this.isClicked) {
        return
      }

      this.isClicked = true
      const keyword = this.searchParams.keyword
      const page = Number(this.searchParams.page) + 1

      await this.fetchMovieList({ keyword, page })
      this.$router.replace({ name: 'Home', query: { search: keyword, page } })
      this.isClicked = false
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__more {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 440px;
    margin-top: -35px;
    margin-left: 40px;

    img {
      cursor: pointer;
    }
  }
  &__movie-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__search-result {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: bold;
  }
  &__movie-items-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__movie-items {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(6, 1fr);
    grid-gap: 20px;
    grid-auto-flow: row dense;
    justify-content: center;
  }
}
</style>
