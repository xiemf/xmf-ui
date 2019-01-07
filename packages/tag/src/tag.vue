<template>
  <span class="x-tag" :class="[type?`x-tag--${type}`: '',tagSize?`x-tag--${tagSize}`:'',{'x-tag-dot': typeof dot !== 'undefined'}]">
    <span class="x-tag-dot--inner" v-if="typeof dot !== 'undefined'">
    </span>
    <span class="x-tag-text"><slot></slot></span>
    <x-icon class="x-tag__close" type="close" v-if="closable" :size="12" @click.stop="handlerClick"></x-icon>
  </span>
</template>
<script>
export default {
  name: 'xTag',
  props: {
    size: {},
    type: {},
    dot: {
    },
    closable: {
      default: false
    }
  },
  computed: {
    tagSize () {
      return this.size
    }
  },
  methods: {
    handlerClick () {
      this.$emit('close', event)
    }
  }
}
</script>
<style lang="less">
@import '../../index.less';
.x-tag {
  display: inline-block;
  border: 1px solid @borderColor;
  border-radius: 4px;
  min-width: 56px;
  height: @default;
  line-height: @default;
  white-space: nowrap;
  color: @textColor;
  padding: 0 8px;
  font-size: 18px;
  + .x-tag {
    margin-left: 8px;
  }
  &--mini {
    height: @mini;
    line-height: @mini;
  }
  &--large {
    height: @large;
    line-height: @large;
  }
  &__close {
    margin-left: 8px;
    cursor: pointer;
    border-radius: 12px;
    padding: 4px;
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
  &--primary {
    color: #fff;
    border: none;
    background-color: @indexColor;
    &.x-tag-dot {
      .x-tag-dot--inner {
        background-color: @indexColor !important;
      }
    }
  }
  .x-tag-text {
    vertical-align: middle;
  }
  &.x-tag-dot {
    border: 1px solid @borderColor !important;
    color: @textColor !important;
    background: #fff !important;
    padding: 0 12px;
    .x-tag-dot--inner {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      margin: 0 8px;
      background-color: @borderColor;
    }
  }
}
</style>
