<template>
  <div class="main__movie-list">
    <CommonTitle />
    <div class="main__movie-item-wrapper">
      <ContentMovieItem
        v-for="movieItem in movieList"
        :key="`item-${movieItem.imdbItem}`"
        :movie-item="movieItem" />
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
    ...mapState(['movieList'])
  },
  created () {
    this.fetchMovieList()
  },
  methods: {
    ...mapActions(['fetchMovieList'])
  }

}
</script>

<style lang="scss" scoped>
.main__movie-list {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}
.main__movie-item-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
