
<script>
function getScroll (target, top) {
  const prop = top ? 'pageYOffset' : 'pageXOffset'
  const method = top ? 'scrollTop' : 'scrollLeft'

  let ret = target[prop]

  if (typeof ret !== 'number') {
    ret = window.document.documentElement[method]
  }

  return ret
}
function getOffset (element) {
  const rect = element.getBoundingClientRect()

  const scrollTop = getScroll(window, true)
  const scrollLeft = getScroll(window)

  const docEl = window.document.body
  const clientTop = docEl.clientTop || 0
  const clientLeft = docEl.clientLeft || 0

  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  }
}
function deepClone (vnodes, createElement) {
  function cloneVNode (vnode) {
    const clonedChildren = vnode.children && vnode.children.map(vnode => cloneVNode(vnode))
    const cloned = createElement(vnode.tag, vnode.data, clonedChildren)
    cloned.text = vnode.text
    cloned.isComment = vnode.isComment
    cloned.componentOptions = vnode.componentOptions
    cloned.elm = vnode.elm
    cloned.context = vnode.context
    cloned.ns = vnode.ns
    cloned.isStatic = vnode.isStatic
    cloned.key = vnode.key
    return cloned
  }
  const clonedVNodes = vnodes.map(vnode => cloneVNode(vnode))
  return clonedVNodes
}
export default {
  name: 'xAffix',
  render (h) {
    return h('div', [
      h('div',
        {
          style: {
            opacity: this.slotDefault
          }
        },
        this.$slots.default),
      h(
        'div',
        {
          class: 'x-affix',
          style: {
            position: 'fixed',
            top: this.top,
            display: this.slot,
            zIndex: 9999,
            width: this.width,
            height: this.height,
            transform: 'none'
          }
        },
        deepClone(this.$slots.default, h)
      )
    ])
  },
  props: {
    top: {
      type: String,
      default: '0px'
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      slotDefault: 1,
      slot: 'none',
      width: '0px',
      height: '0px'
    }
  },
  computed: {
    offsetType () {
      let type = 'top'
      // if (this.offsetBottom >= 0) {
      //   type = 'bottom'
      // }
      return type
    }
  },
  methods: {
    handleScroll () {
      let scrollTop = getScroll(window, true)
      let elOffset = getOffset(this.$el)
      // let windowHeight = window.innerHeight
      let elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight
      let elWidth = this.$el.getElementsByTagName('div')[0].offsetWidth
      if (elOffset.top - this.offsetTop < scrollTop && this.offsetType === 'top') {
        this.slot = 'block'
        this.width = `${elWidth}px`
        this.height = `${elHeight}px`
        this.slotDefault = 0
      } else if (elOffset.top - this.offsetTop >= scrollTop && this.offsetType === 'top') {
        this.slot = 'none'
        this.slotDefault = 1
      }
      // bottom
      // if ((elOffset.top + this.offsetBottom + elHeight) > (scrollTop + windowHeight) && this.offsetType === 'bottom' ) {
      // TO DO
      // }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleScroll)
  }
}
</script>
