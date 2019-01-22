<template>
  <li class="x-select-dropdown__item" @mouseenter="hoverItem" @click="selectOptionClick">
    <slot>
      <span>{{label}}</span>
    </slot>
  </li>
</template>
<script>
export default {
  name: 'xOption',
  // inject: ['select'],
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
    hoverItem () { },
    selectOptionClick () {
      this.$emit('select', { value: this.value, label: this.label })
    }
  }
}
</script>
<style lang="less">
.x-select-dropdown__item {
}
</style>
