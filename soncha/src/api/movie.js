import { instance } from '@/api/index'

function getMovieList (keyword = 'lion', page = 1) {
  return instance.post('', {
    s: keyword,
    page
  })
}

function getMovieDetail (id, plot = 'long') {
  return instance.post('', {
    i: id,
    plot
  })
}

export {
  getMovieList,
  getMovieDetail
}
