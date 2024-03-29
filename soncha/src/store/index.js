import { createStore } from 'vuex'
import { getMovieList, getMovieDetail } from '@/api/movie'
import router from '@/routes'

export default createStore({
  state: {
    currentMovie: {},
    movieList: [],
    totalLength: 0,
    searchParams: {
      id: '',
      page: 1,
      keyword: 'lion',
      plot: 'long'
    }
  },
  mutations: {
    SET_CURRENTMOVIE (state, movie) {
      state.currentMovie = movie
    },
    SET_MOVIELIST (state, movieList) {
      state.movieList = movieList
    },
    SET_TOTALLENGTH (state, total) {
      state.totalLength = Number(total)
    },
    SET_SEARCHPARAMS (state, params) {
      for (const key in params) {
        state.searchParams[key] = params[key]
      }
    }
  },
  actions: {
    async fetchMovieList ({ state, commit }, payload = {}) {
      const { keyword, page, isMore = false } = payload
      const res = await getMovieList(keyword, page)

      if (!res.data) {
        router.replace('/404')
        return
      }

      if (isMore) {
        commit('SET_MOVIELIST', [...state.movieList, ...res.data])
      } else {
        commit('SET_MOVIELIST', res.data)
      }

      commit('SET_TOTALLENGTH', res.total)
      commit('SET_SEARCHPARAMS', { keyword: keyword || 'lion', page: page || 1 })
    },
    async fetchMovieDetail ({ commit }, payload) {
      const { data } = await getMovieDetail(payload)

      commit('SET_SEARCHPARAMS', { id: payload })
      commit('SET_CURRENTMOVIE', data)
    }
  }
})
