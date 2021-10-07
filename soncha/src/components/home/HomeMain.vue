<template>
  <div class="main__movie-list">
    <CommonTitle />
    <div class="main__movie-items">
      <ContentMovieItem
        v-for="movieItem in movieList"
        :key="`item-${movieItem.imdbItem}`"
        :movie-item="movieItem" />
    </div>
    <div class="main__movie-pagination">
    </div>
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
.main__movie-list {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}
.main__movie-items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.movie-pagination {
  padding: 0 10px;
}
</style>
