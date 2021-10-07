<template>
  <div
    class="header__arrow"
    @click="test">
    <img
      src="../../assets/icon-arrow.svg"
      alt="" />
  </div>
</template>

<script>
export default {
  methods: {
    test () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.header__arrow {
  display: inline-block;
  padding: 15px 23px 15px 18px;
  margin: 20px;
  border-radius: 50%;
  background-color: rgba(255,255,255,.1);
}

</style>
