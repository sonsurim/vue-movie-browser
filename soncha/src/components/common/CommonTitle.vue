<template>
  <h1 :class="`${type}-list__title`">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Movies'
    },
    type: {
      type: String,
      default: 'movie'
    }
  }

}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 44px;
}

</style>
