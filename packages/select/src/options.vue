<template>
  <li class="x-select-dropdown__item" @click.prevent="selectOptionClick">
    <slot>
      <span>{{label}} {{selectValue}}</span>
    </slot>
  </li>
</template>
<script>
import Emitter from '../../../src/mixins/emitter.js'
export default {
  name: 'xOption',
  inject: ['select'],
  mixins: [Emitter],
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
  computed: {
    selectValue () {
      return this.select.value
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
    selectOptionClick () {
      this.dispatch('xSelect', 'handleOptionClick', [this, true])
    },
    handleValueChange () {
      console.log(this.select.value)
    }
  },
  watch: {

  },
  created () {
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
