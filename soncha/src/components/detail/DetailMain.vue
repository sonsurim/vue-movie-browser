<template>
  <main>
    <div
      v-show="!isLoading"
      class="main__container">
      <div class="main__wrapper">
        <div class="main__row">
          <div class="main__movie-content">
            <div class="content__badge-wrapper">
              <CommonBadge
                v-for="info in badgeInfo"
                :key="`badge-${info.icon}`"
                :info="info">
                {{ info }}
              </CommonBadge>
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
              {{ plot }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CommonBadge from '@/components/common/CommonBadge'

export default {
  components: {
    CommonBadge
  },
  data () {
    return {
      isLoading: true,
      title: '',
      poster: '',
      director: '',
      plot: '',
      badgeInfo: {
        runtime: {
          icon: '',
          text: ''
        },
        released: {
          icon: '',
          text: ''
        },
        score: {
          icon: '',
          text: ''
        }
      },
      genreList: []
    }
  },
  computed: {
    ...mapState(['currentMovie'])
  },
  watch: {
    currentMovie () {
      this.setData()
    }
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions(['fetchMovieDetail']),
    async init () {
      const id = this.$route.params.id
      await this.fetchMovieDetail(id)
      this.emitter.emit('hide:spinner')
      this.isLoading = false
    },
    setData () {
      const { Title, Poster, Director, Plot, Genre, Runtime, Released, imdbRating } = this.currentMovie
      const runtime = Runtime.split(' ')[0]

      this.title = Title || ''
      this.poster = Poster.replace('SX300', 'SX800') || ''
      this.director = Director || ''
      this.plot = Plot || ''
      this.genreList = Genre.split(',').splice(2) || []

      this.badgeInfo.runtime.icon = 'clock'
      this.badgeInfo.released.icon = 'calendar'
      this.badgeInfo.score.icon = 'star'
      this.badgeInfo.runtime.text = `${Math.floor(runtime / 60)}h ${runtime % 60}min` || ''
      this.badgeInfo.released.text = Released.split(' ').reverse().join(' ') || ''
      this.badgeInfo.score.text = `${imdbRating} / 10` || ''
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 18px;
}
.main {
  &__spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 140px);
  }
  &__container {
    display: flex;
    align-items: center;
    width: 960px;
    height: calc(100vh - 300px);
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
    width: 360px;
    border-radius: 20px;
  }
  &__movie-info {
    position: relative;
  }
}
.content {
  &__badge-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
  }
  &__title {
    width: 560px;
    margin-top:90px;
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
    height: 100px;
    overflow: scroll;
    line-height: 1.6;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
