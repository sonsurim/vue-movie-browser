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
export default {
  props: {
    movieItem: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['showDetail'],
  methods: {
    showDetail () {
      const movieId = this.movieItem.imdbID
      this.emitter.emit('show:spinner')
      this.$emit('showDetail', movieId)
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-list__item {
  width: 200px;
  min-width: 200px;
  padding: 20px 10px;
  cursor: pointer;
}
.item {
  &-title {
    margin: 0;
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    padding: 0 10px;
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
