<template>
  <div
    class="header__arrow"
    @click="goBack">
    <img
      src="../../assets/icon_arrow.svg"
      alt="arrow" />
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.header__arrow {
  display: inline-block;
  padding: 15px 23px 15px 18px;
  margin: 80px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(255,255,255,.1);
}
</style>
