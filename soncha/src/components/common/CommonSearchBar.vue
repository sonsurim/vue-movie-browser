<template>
  <div class="header__searchbar">
    <input
      v-model.trim="searchKeyword"
      type="text"
      class="searchbar__input"
      placeholder="검색어를 입력하세요!"
      @keyup.enter="searchMovie" />
    <img
      class="searchbar__icon"
      src="../../assets/icon-search.svg"
      alt="" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    ...mapActions(['fetchMovieList']),
    async searchMovie () {
      const res = await this.fetchMovieList({ keyword: this.searchKeyword })
      console.log(res)
      console.log(this.searchKeyword)
    }
  }

}
</script>

<style>
.searchbar__input {
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
}
.searchbar__icon {
  width: 20px;
  height: 20px;
}

</style>
