<template>
  <span class="x-tag" :class="[type?`x-tag--${type}`: '',tagSize?`x-tag--${tagSize}`:'',{'x-tag-dot': typeof dot !== 'undefined'}]">
    <span class="x-tag-dot--inner" v-if="typeof dot !== 'undefined'">
    </span>
    <span class="x-tag-text"><slot></slot></span>
    <cip-icon class="x-tag__close" type="close" v-if="closable" :size="12" @click.native.stop="handlerClick"></cip-icon>
  </span>
</template>
<script>
import CipIcon from '../../icon'
export default {
  name: 'xTag',
  components: {
    CipIcon
  },
  props: {
    size: {},
    type: {},
    dot: {
    },
    name: {},
    closable: {
      default: false
    }
  },
  computed: {
    tagSize () {
      return this.size
    }
  },
  methods: {
    handlerClick () {
      this.$emit('close', event)
    }
  }
}
</script>
