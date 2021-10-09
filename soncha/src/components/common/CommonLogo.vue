<template>
  <h2 @click="goHome">
    SONCHA
  </h2>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.header__logo {
  font-size: 35px;
  font-weight: bold;
  color: #FF3838;
  cursor: pointer;
}
</style>
