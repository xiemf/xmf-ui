<template>
    <li :class="classes" @click="handleClick"><slot></slot></li>
</template>
<script>
import { findComponentUpward } from '../../../src/utils/tools.js'
const prefixCls = 'cip-dropdown-item'
export default {
  name: 'CipDropdownItem',
  props: {
    name: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    divided: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-selected`]: this.selected,
          [`${prefixCls}-divided`]: this.divided
        }
      ]
    }
  },
  methods: {
    handleClick () {
      const $parent = findComponentUpward(this, 'CipDropdown')
      const hasChildren = this.$parent && this.$parent.$options.name === 'CipDropdown'

      if (this.disabled) {
        this.$nextTick(() => {
          $parent.currentVisible = true
        })
      } else if (hasChildren) {
        this.$parent.$emit('on-haschild-click')
      } else {
        if ($parent && $parent.$options.name === 'CipDropdown') {
          $parent.$emit('on-hover-click')
        }
      }
      $parent.$emit('on-click', this.name)
    }
  }
}
</script>
