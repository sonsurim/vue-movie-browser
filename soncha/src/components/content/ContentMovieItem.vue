<template>
  <div
    :data-id="movieItem.imdbID"
    class="movie-list__item"
    @click="test">
    <div
      class="item-img"
      :style="`background-image: url(${movieItem.Poster}) `"
      alt=""></div>
    <div class="item-info">
      <h4 class="item-title">
        {{ movieItem.Title }}
      </h4>
      <h6></h6>
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
  methods: {
    test () {
      console.log(this.movieItem)
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-list__item {
  width: 300px;
}
.item {
  &-title {
    margin: 0;
    margin-top: 20px;
  }
  &-img {
    width: 100%;
    height: 350px;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
