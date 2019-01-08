<script>
export default {
  name: 'xCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter () {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'X-Row') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }

  },
  render (h) {
    let classList = []
    let style = {}
    if (this.gutter) {
      style.marginLeft = `${this.gutter / 2}px`
      style.marginRight = style.marginLeft
    }
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(prop !== 'span' ? `x-col-${prop}-${this[prop]}` : `x-col-${this[prop]}`)
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`x-col-${size}-${this[size]}`)
      } else if (typeof this[size] === 'object') {
        let props = this[size]
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `x-col-${size}-${prop}-${props[prop]}`
              : `x-col-${size}-${props[prop]}`
          )
        })
      }
    })
    return h(this.tag, {
      class: ['x-col', classList],
      style
    }, this.$slots.default)
  }
}
</script>
<style lang="less">
.x-col-0 {
  display: none;
}
[class*='x-col-'] {
  float: left;
}
.x-col();
.x-col(@i:1) when(@i <= 24) {
  .x-col-@{i} {
    width: (@i / 24) * 100%;
  }
  .x-col-offset-@{i} {
    margin-left: (@i / 24) * 100%;
  }
  .x-col-pull-@{i} {
    position: relative;
    left: (@i / 24) * 100%;
  }
  .x-col-push-@{i} {
    position: relative;
    right: (@i / 24) * 100%;
  }
  .x-col(@i+1);
}
</style>
