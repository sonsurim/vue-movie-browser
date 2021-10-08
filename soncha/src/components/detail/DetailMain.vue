<template>
  <main>
    <div class="main__container">
      <div class="main__row">
        <div class="main__movie-content">
          <div class="content__badge-wrapper">
          </div>
          <h1
            class="content__title"
            :class="{ sm: title.length > 13 }">
            {{ title }}
          </h1>
          <div class="content__info">
            <div class="content__director">
              {{ director }}
            </div>
            <div class="content__badges">
              <span
                v-for="genre in genreList"
                :key="`item_${genre}`"
                class="content__badge">
                {{ genre }}
              </span>
            </div>
            <hr class="content__division" />
          </div>
        </div>
        <img
          class="main__movie-img"
          :src="poster"
          alt="" />
      </div>
      <div class="main__row">
        <div class="main__movie-info">
          <div class="info__title">
            <h2>Introduction</h2>
          </div>
          <div class="info__content">
            {{ info }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '',
      poster: '',
      director: '',
      info: '',
      genreList: []
    }
  },
  computed: {
    ...mapState(['currentMovie'])
  },
  watch: {
    currentMovie () {
      this.title = this.currentMovie.Title || ''
      this.poster = this.currentMovie.Poster || ''
      this.director = this.currentMovie.Director || ''
      this.info = this.currentMovie.Plot || ''
      this.genreList = this.currentMovie.Genre.split(',').splice(2) || []
    }
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions(['fetchMovieDetail']),
    async init () {
      const id = this.$route.params.id
      this.fetchMovieDetail(id)
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  font-size: 18px;
}
.main {
  &__container {
    width: 960px;
  }
  &__row:first-child {
    display: flex;
    justify-content: space-around;
  }
  &__movie-content {
    position: relative;
    flex: 1;
    width: 560px;
    padding: 0 50px 0 0;
  }
  &__movie-img {
    width: 400px;
    border-radius: 20px;
  }
  &__movie-info {
    position: relative;
  }
}
.content {
  &__title {
    width: 560px;
    font-size: 80px;
    font-weight: bold;
    word-break: break-word;

    &.sm {
      font-size: 50px;
    }
  }
  &__info {
    position: absolute;
    bottom: 50px;
    width: 560px;
  }
  &__director {
    margin-left: 8px;
    margin-bottom: 30px;
    opacity: .5;
    font-size: 24px;
  }
  &__badge {
    margin-right: 20px;
    padding: 10px 20px;
    border-radius: 50px;
    background: rgba(255, 255, 255, .1);
  }
  &__division {
    margin-top: 30px;
    opacity: .5;
  }
}
.info {
  &__title {
    position: absolute;
    top: -20px;
    font-size: 30px;
    font-weight: bold;
  }
  &__content {
    position: absolute;
    top: 40px;
  }
}
</style>
