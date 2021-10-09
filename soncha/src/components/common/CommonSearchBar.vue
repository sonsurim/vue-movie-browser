<template>
  <div class="searchbar__wrapper">
    <input
      v-model.trim="searchKeyword"
      type="text"
      class="searchbar__input"
      placeholder="검색어를 입력하세요!"
      @keyup.enter="searchMovie" />
    <img
      class="searchbar__icon"
      src="../../assets/icon-search.svg"
      alt="search"
      @click="searchMovie" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    async searchMovie () {
      const keyword = this.searchKeyword

      if (this.$route.name === 'NotFound') {
        this.$router.replace({ name: 'Home', query: { search: keyword, page: 1 } })
        return
      }

      if (keyword !== this.$route.query.search) {
        this.emitter.emit('show:spinner')
      }

      this.$router.push(`?search=${keyword}&page=1`)
    }
  }

}
</script>

<style lang="scss" scoped>
.searchbar {
  &__wrapper {
    position: relative;
  }
  &__input {
    width: 950px;
    padding: 15px 0 15px 35px;
    border: 1px solid #FFFFFF;
    border-radius: 80px;
    background: transparent;
    color: #FFFFFF;
    outline: none;
    font-size: 18px;
  }
  &__icon {
    position: absolute;
    top: 15px;
    right: 30px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
