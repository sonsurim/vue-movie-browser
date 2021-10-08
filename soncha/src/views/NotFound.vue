<template>
  <HomeHeader />
  <main class="notfound__main">
    <h1>No Result!</h1>
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
.notfound__main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
}
h1 {
  font-size: 80px;
  font-weight: bold;
  text-align: center;
}
</style>
