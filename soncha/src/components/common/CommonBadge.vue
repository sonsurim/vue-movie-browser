<template>
  <div class="content__badge-header">
    <img
      class="badge"
      :src="imgUrl"
      alt="badge" />
    <span>{{ info.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    imgUrl () {
      return !this.info.icon ? '' : require(`../../assets/icon_${this.info.icon}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.content__badge-header {
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    opacity: .8;
  }

  span {
    margin-top: 5px;
    margin-left: 10px;
  }
}
.badge {
  width: 24px;
  height: 24px;
}

</style>
