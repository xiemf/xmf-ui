<template>
  <li class="x-select-dropdown__item" @mouseenter="hoverItem" @click="selectOptionClick">
    <slot>
      <span>{{currentLabel}}</span>
    </slot>
  </li>
</template>
<script>
export default {
  name: 'xOption',
  inject: ['select'],
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
    selectOptionClick () { }
  }
}
</script>
