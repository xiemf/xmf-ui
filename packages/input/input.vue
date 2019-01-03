<template>
  <div>
    <div class="my-input"
         :class="focus? 'x-focus': ''">
      <div :class="value || focus ? 'input-label' : 'no-value-input'"
           style="transition:.5s;">{{value ? label :( placeholder ? placeholder :`请输入${label}`)}}</div>
      <input :value="value"
             @input="e => {this.$emit('input', e.target.value)}"
             @focus="inputFocus"
             @blur="inputBlur" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      default: ''
    },
    label: {
      default: '项'
    },
    placeholder: {
      default: ''
    }
  },
  data () {
    return {
      focus: false
    }
  },
  methods: {
    divInput (e) {
      this.value = e.target.innerText
    },
    inputFocus (e) {
      this.focus = true
      this.$emit('focus', e)
    },
    inputBlur (e) {
      this.focus = false
      this.$emit('blur', e)
    }
  }
}
</script>
<style lang="less">
@import '../index.less';
.x-focus {
  color: @indexColor;
  border-color: @indexColor !important;
}
.my-input {
  position: relative;
  border: 1px solid #ddd;
  padding: 0 10px;
  background-color: #fff;
  margin-top: 6px;
  .input-label {
    position: absolute;
    left: 10px;
    top: 0;
    transform: translateY(-50%);
    background: #fff;
    font-size: 12px;
  }
  .no-value-input {
    position: absolute;
    left: 10px;
    top: 0;
    color: #999;
    background: #fff;
    line-height: 30px;
    font-size: 12px;
  }
  > input {
    width: 100%;
    outline: none;
    border: none;
    min-height: 30px;
  }
}
</style>
