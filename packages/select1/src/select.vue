<template>
  <div class="x-select" :class="{'is-focus':focus}">
    <x-input  suffix-icon="x-icon-less" :style="`width:${width}px`" :readonly="true" :value="inputValue" :placeholder="placeholder" :label="label" @focus="focusHandle" @blur="blurHandle">
    </x-input>
    <transition name="fade">
      <div class="x-select-dropdown" v-show="focus" :style="`width:${width}px;`">
        <ul class="x-select-dropdown-wrap">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
// import XInput from 'xmf-ui/packages/input'
import XInput from '../../input/index.js'
import Emitter from '../../../src/mixins/emitter.js'
export default {
  name: 'xSelect',
  componentName: 'xSelect',
  mixins: [Emitter],
  components: {
    XInput
  },
  provide () {
    return {
      'select': this
    }
  },
  props: {
    value: {},
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
      focus: false,
      inputValue: ''
    }
  },
  computed: {
    readOnly () {
      return this.filterable
    }
  },
  methods: {
    focusHandle () {
      this.focus = true
    },
    blurHandle () {
      this.focus = false
    },
    handleOptionClick (e) {
      console.log(e)
      this.$emit('input', e.value)
      this.inputValue = e.$slots.default[0].text || e.value
      // this.$emit('input', value)
    }
  },
  watch: {
    value (val) {
      console.log(this)
      this.inputValue = val
      this.$slots.default.map(v => {
        console.log(v.componentOptions.propsData.value === val)
        if (v.componentOptions.propsData.value === val) {
          this.inputValue = v.componentOptions.children[0].text
        }
      })
      // this.inputValue = val
    }
  },
  created () {
    this.$on('handleOptionClick', this.handleOptionClick)
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
.fade-enter-active, .fade-leave-active {
  transform: scaleY(1);
  transition: opacity 0.3s cubic-bezier(.23,1,.32,1);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scaleX(0)
}
</style>
