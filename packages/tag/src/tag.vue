<template>
  <span class="x-tag" :class="[type?`x-tag--${type}`: '',tagSize?`x-tag--${tagSize}`:'',{'x-tag-dot': typeof dot !== 'undefined'}]">
    <span class="x-tag-dot--inner" v-if="typeof dot !== 'undefined'">
    </span>
    <span class="x-tag-text"><slot></slot></span>
    <x-icon class="x-tag__close" type="close" v-if="closable" :size="12" @click.native="handlerClick"></x-icon>
  </span>
</template>
<script>
export default {
  name: 'xTag',
  props: {
    size: {},
    type: {},
    dot: {
    },
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
