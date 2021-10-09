<template>
  <div
    :data-id="movieItem.imdbID"
    class="movie-list__item"
    @click="showDetail">
    <div
      class="item-img"
      :style="styleObject"
      alt=""></div>
    <div class="item-info">
      <h4 class="item-title">
        {{ movieItem.Title }}
      </h4>
      <p class="item-year">
        {{ movieItem.Year }}
      </p>
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
  computed: {
    styleObject () {
      if (this.movieItem.Poster !== 'N/A') {
        return { 'background-image': `url(${this.movieItem.Poster})` }
      }

      return { 'background-color': '#333' }
    }
  },
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
  &-year {
    font-size: 16px;
    margin-top: 10px;
    padding: 0 10px;
    color: rgba(255, 255, 255, .5)
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
