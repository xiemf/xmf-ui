<template>
  <i :class="`iconfont x-icon-${type}`"
     :style="styles"></i>
</template>
<script>
export default {
  name: 'xIcon',
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#5c6b77'
    },
    size: {
      type: Number,
      default: 16
    }
  },
  computed: {
    styles () {
      return {
        fontSize: `${this.size}px`,
        color: this.color
      }
    }
  }
}
</script>
<style lang="less">
@import '../assets/icon/iconfont.css';
</style>
