<template>
  <div>
    <div class="x-input" :class="[isFocus? 'x-focus': '', inputSize ? `x-input--${inputSize}`:'']">
      <div @click="focus" v-if="!(prefixIcon)" class="input-label" :class="value || isFocus ? 'have-value' : 'no-value'"
           style="transition:.5s;">{{value ? label : (placeholder ? placeholder : `${label?label:''}`) }}</div>
      <i v-if="prefixIcon" :class="`iconfont ${prefixIcon}`" style="font-size:14px; color:#999;margin-right:2px" />
      <input ref="input" class="x-input--inner" :value="value" :placeholder="prefixIcon ? placeholder:''" :type="type" :maxlength="maxlength" :autocomplete="autocomplete" :name="name"
             :readonly="readonly" :max="max" :min="min" :step="step" :autofocus="autofocus" :form="form"
             @input="e => {this.$emit('input', e.target.value)}"
             @change="e => {this.$emit('change', e.target.value)}"
             @focus="inputFocus"
             @blur="inputBlur" />
      <i v-if="suffixIcon" :class="`iconfont ${suffixIcon}`" style="font-size:14px; color:#999;margin-left:2px" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'xInput',
  props: {
    value: {},
    label: {},
    // 原生属性
    type: {
      default: 'text'
    },
    prefixIcon: {},
    suffixIcon: {},
    placeholder: {},
    // minlength: {},
    maxlength: {},
    autocomplete: {
      default: false
    },
    name: {},
    readonly: {},
    max: {},
    min: {},
    step: {},
    autofocus: {},
    form: {}
  },
  computed: {
    inputSize () {
      return this.size
    }
  },
  data () {
    return {
      isFocus: false
    }
  },
  methods: {
    focus () {
      this.$refs.input.focus()
    },
    inputFocus (e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    inputBlur (e) {
      this.isFocus = false
      this.$emit('blur', e)
    }
  },
  created () {
  }
}
</script>
<style lang="less">
@import '../index.less';
.x-focus {
  color: @indexColor !important;
  border-color: @indexColor !important;
}
.x-input {
  min-width: 170px;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 0 10px;
  background-color: #fff;
  margin-top: 8px;
  color: #999;
  .input-label {
    position: absolute;
    left: 10px;
    top: 0;
    background: #fff;
    font-size: 12px;
  }
  .have-value {
    color: inherit;
    transform: translateY(-50%);
  }
  .no-value {
    color: #999;
    line-height: 32px;
  }
  .x-input--inner {
    flex-grow: 1;
    outline: none;
    border: none;
    min-height: 30px;
  }
}
</style>
