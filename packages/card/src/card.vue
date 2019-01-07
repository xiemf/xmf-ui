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
@import '../../index.less';
.x-card {
  width: 100%;
  border: 1px solid @borderColor;
  text-align: left;
  transition: box-shadow 0.5s;
  &__header {
    padding: 18px 20px;
    border-bottom: 1px solid @borderColor;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bolder;
  }
  &__content {
    padding: 20px;
  }
  &.is-hover-shadow {
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
  &.is-never-shadow {
  }
  &.is-always-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
