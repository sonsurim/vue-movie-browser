<template>
  <div>
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

      this.$router.push(`?search=${keyword}&page=1`)
      this.searchKeyword = ''
    }
  }

}
</script>

<style>
.searchbar__input {
  position: relative;
  width: 950px;
  padding: 15px 0 15px 35px;
  border: 1px solid #FFFFFF;
  border-radius: 80px;
  background: transparent;
  color: #FFFFFF;
  outline: none;
  font-size: 18px;
}
.searchbar__icon {
  position: absolute;
  top: 76px;
  right: 125px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

</style>
