<template>
  <div class="x-select" :class="{'is-focus':focus}">
    <x-input  suffix-icon="x-icon-less" :style="`width:${width}px`" :readonly="true" :placeholder="placeholder" :label="label" @focus="focusHandle" @blur="blurHandle">
    </x-input>
    <div class="x-select-dropdown" :style="`width:${width}px;display:${showDropdown}`">
      <ul class="x-select-dropdown-wrap" @click="handleOptionClick(123)">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script>
// import XInput from 'xmf-ui/packages/input'
import XInput from '../../input/index.js'
// import Emitter from '../../../src/mixins/emitter.js'
export default {
  name: 'xSelect',
  componentName: 'xSelect',
  // mixins: [Emitter],
  components: {
    XInput
  },
  provide () {
    return {
      'select': this
    }
  },
  props: {
    width: {
      default: 200
    },
    filterable: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    placeholder: {
      default: '请选择'
    }
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    readOnly () {
      return this.filterable
    },
    showDropdown () {
      if (this.focus) {
        return 'block'
      } else {
        return 'none'
      }
    }
  },
  methods: {
    focusHandle () {
      this.focus = true
    },
    blurHandle () {
      this.focus = false
    },
    handleOptionClick (value) {
      console.log(value)
      // this.$emit('input', value)
    }
  },
  created () {
    // this.$on('handleOptionClick', this.handleOptionClick)
    // window.addEventListener('handleOptionClick', this.handleOptionClick)
  }
}
</script>
<style lang="less">
.x-select {
  position: relative;
  display: inline-block;
}
.x-select-dropdown {
  display: none;
  position: absolute;
  background: white;
  min-height: 2em;
  max-height: 50vh;
  overflow: auto;
  border: 1px solid #ddd;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.x-select.is-focus .x-input .x-icon-less {
  transform: rotate(0deg);
}
.x-select .x-input .x-icon-less {
  transition: all 0.3s;
  transform: rotate(180deg);
}
</style>
