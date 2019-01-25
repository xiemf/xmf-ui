<template>
  <li class="x-select-dropdown__item" @mouseover="hoverItem" @click.stop.native="selectOptionClick">
    <slot>
      <span>{{label}}</span>
    </slot>
  </li>
</template>
<script>
// import Emitter from '../../../src/mixins/emitter.js'
export default {
  name: 'xOption',
  inject: ['select'],
  // mixins: [Emitter],
  props: {
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    }
  },
  methods: {
    hoverItem () {
      console.log('hover')
    },
    selectOptionClick () {
      console.log('click')
      // this.dispatch('xSelect', 'handleOptionClick', [this, true])
    }
  }
}
</script>
<style lang="less">
.x-select-dropdown__item {
  cursor: pointer;
  width: 100%;
  padding: 4px 16px;
  &:hover {
    background: #ddd;
  }
}
</style>
