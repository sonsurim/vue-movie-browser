import { createStore } from 'vuex'
import { getMovieList } from '@/api/movie'

export default createStore({
  state: {
    movieList: [],
    searchParams: {
      id: '',
      page: '',
      keyword: '',
      plot: ''
    }
  },
  mutations: {
    SET_MOVIELIST (state, movieList) {
      state.movieList = movieList
    },
    SET_SEARCHPARAMS (state, params) {
      for (const key in params) {
        state.searchParams[key] = params[key]
      }
    }
  },
  actions: {
    async fetchMovieList ({ commit }, payload = {}) {
      const { keyword = 'lion', page = 1 } = payload
      const { data } = await getMovieList(keyword, page)

      if (!data) {
        return
      }

      commit('SET_MOVIELIST', data.Search)
      commit('SET_SEARCHPARAMS', { keyword: keyword || 'lion', page: page || 1 })
    }
  },
  modules: {
  }
})
