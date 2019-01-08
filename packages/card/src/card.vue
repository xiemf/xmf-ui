<template>
  <div class="x-card" :class="shadow ? `is-${shadow}-shadow`:'is-always-shadow'">
    <div class="x-card__header" v-if="$slots.header || header">
      <slot name="header">{{header}}</slot>
    </div>
    <div class="x-card__content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'xCard',
  props: {
    header: {},
    contentStyle: {},
    shadow: {
      type: String
    }
  }
}
</script>
