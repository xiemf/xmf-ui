<template>
  <div class="x-select">
    <x-input  suffix-icon="x-icon-originalimage" :style="`width:${width}px`" :readonly="true" :placeholder="placeholder" :label="label" @focus="focusHandle" @blur="blurHandle"></x-input>
    <div class="x-select-dropdown" :style="`width:${width}px;display:${showDropdown}`">
      <ul class="x-select-dropdown-wrap">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script>
// import XInput from 'xmf-ui/packages/input'
import XInput from '../../input/index.js'
export default {
  name: 'xSelect',
  components: {
    XInput
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
      showDropdown: 'none'
    }
  },
  computed: {
    readOnly () {
      return this.filterable
    }
  },
  methods: {
    focusHandle () {
      this.showDropdown = 'block'
    },
    blurHandle () {
      this.showDropdown = 'none'
    }
  },
  mounted () {
    console.log(this.$refs.select)
  }
}
</script>
<style lang="less" scoped>
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
</style>
