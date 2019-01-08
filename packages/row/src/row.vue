<script>
export default {
  name: 'xRow',
  componentName: 'X-Row',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style () {
      let ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    }
  },
  render (h) {
    return h(this.tag, {
      class: [
        'x-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'x-row-flow': this.style === 'flex' }
      ],
      style: this.style
    }, this.$slots.default)
  }
}
</script>
<style lang="less">
@import '../../index.less';
// @import '../../less/mixins/util.less';

.x-row {
  position: relative;
  .utils-clearfix;
  &::before,
  &::after {
    display: none;
  }
}
</style>
