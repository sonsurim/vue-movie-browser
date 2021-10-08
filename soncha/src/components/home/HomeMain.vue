<template>
  <div class="main__movie-list">
    <CommonTitle />
    <div class="main__movie-items-wrapper">
      <div class="main__movie-items">
        <ContentMovieItem
          v-for="movieItem in movieList"
          :key="`item-${movieItem.imdbItem}`"
          :movie-item="movieItem" />
      </div>
    </div>
    <!-- <div class="main__movie-pagination">
    </div> -->
  </div>
</template>

<script>
import ContentMovieItem from '@/components/content/ContentMovieItem'
import CommonTitle from '@/components/common/CommonTitle'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    CommonTitle,
    ContentMovieItem
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['movieList', 'totalLength'])
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions(['fetchMovieList']),
    async init () {
      await this.fetchMovieList()
      console.log(this.movieList, this.totalLength)
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
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-flow: row dense;
  justify-content: center;
}
.movie-pagination {
  padding: 0 10px;
}
</style>
