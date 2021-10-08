<template>
  <header class="header">
    <CommonLogo class="header__logo" />
    <CommonSearchBar class="header__searchbar" />
  </header>
</template>

<script>
import CommonLogo from '@/components/common/CommonLogo'
import CommonSearchBar from '@/components/common/CommonSearchBar'
export default {
  components: {
    CommonLogo,
    CommonSearchBar
  }

}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 100px 70px 100px;
}
.header {
  &__logo{
    margin-top: 7px;
  }
}

</style>
