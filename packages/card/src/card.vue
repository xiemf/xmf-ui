<template>
  <div class="x-card" :class="shadow ? `is-${shadow}-shadow`:'is-always-shadow'">
    <div class="x-card__header" v-if="$slots.header || header">
      <slot name="header">{{header}}</slot>
    </div>
    <div class="x-card__content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'xCard',
  props: {
    header: {},
    contentStyle: {},
    shadow: {
      type: String
    }
  }
}
</script>
<style lang="less">
.x-card {
  width: 100%;
  border: 1px solid #ebeef5;
  text-align: left;
  &__header {
    padding: 18px 20px;
  }
  &__content {
    padding: 20px;
  }
  .is-hover-shadow {
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .is-never-shadow {
  }
  .is-always-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
