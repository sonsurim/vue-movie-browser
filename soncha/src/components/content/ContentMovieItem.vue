<template>
  <div
    :data-id="movieItem.imdbID"
    class="movie-list__item"
    @click="showDetail">
    <div
      class="item-img"
      :style="`background-image: url(${movieItem.Poster}) `"
      alt=""></div>
    <div class="item-info">
      <h4 class="item-title">
        {{ movieItem.Title }}
      </h4>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    movieItem: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapMutations(['SET_CURRENTMOVIE']),
    showDetail () {
      const movieId = this.movieItem.imdbID

      this.SET_CURRENTMOVIE(movieId)
      this.$router.push(`/movie/${movieId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-list__item {
  width: 200px;
  min-width: 200px;
  padding: 20px 10px;
}
.item {
  &-title {
    margin: 0;
    margin-top: 20px;
  }
  &-img {
    width: 100%;
    height: 300px;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
  }
}
</style>
