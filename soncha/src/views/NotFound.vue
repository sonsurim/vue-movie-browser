<template>
  <HomeHeader />
  <main class="notfound__main">
    <h1>404</h1>
    <h1>NOT FOUND</h1>
  </main>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader'

export default {
  components: {
    HomeHeader
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 80px;
  font-weight: bold;
  text-align: center;
}
</style>
