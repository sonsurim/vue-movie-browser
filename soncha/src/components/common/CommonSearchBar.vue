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
export default {
  data () {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    async searchMovie () {
      const keyword = this.searchKeyword

      this.$router.push(`?search=${keyword}&page=1`)
      this.searchKeyword = ''
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
