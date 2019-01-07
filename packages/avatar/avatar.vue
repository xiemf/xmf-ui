<template>
  <div :style="avatarStyle"
       v-if="hidden"
       class="avatar-box">
    <template v-if="src">
      <img :src="src"
           :style="imgStyle" />
    </template>
    <template v-else-if="icon">
      <x-icon :type="icon"
              :size="size"
              :color="iconColor"></x-icon>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
<script>
import { oneOf } from '../../src/utils/tools.js'
export default {
  name: 'xAvatar',
  props: {
    src: {
      type: String
    },
    icon: {
      type: String
    },
    width: {
      type: Number,
      default: 32,
      validator: (val) => {
        return val >= 32
      }
    },
    shape: {
      type: String,
      default: 'circle',
      validator: (val) => {
        return oneOf(val, ['circle', 'square'])
      }
    },
    color: {
      type: String,
      default: '#fff'
    },
    backgroudColor: {
      type: String,
      default: 'rgb(204, 204, 204)'
    },
    iconSize: {
      type: Number
    },
    iconColor: {
      type: String,
      default: '#fff'
    },
    fontSize: {
      type: Number
    }
  },
  computed: {
    avatarStyle () {
      let radius = 3
      if (this.shape !== 'square') {
        radius = this.width / 2
      }
      return `width: ${this.width}px; 
      height:${this.width}px; 
      border-radius:${radius}px;
      color:${this.color};
      background-color:${this.backgroudColor};
      font-size:${this.fontSize ? this.fontSize : this.width / 2}px;
      `
    },
    imgStyle () {
      let str = ''
      if (this.src) {
        let width = Math.sqrt(2) * (this.width / 2)
        str = `width:${width}px;
        height:${width}px`
      }
      return str
    },
    size () {
      let size = ''
      if (this.iconSize) {
        size = this.iconSize
      } else {
        size = Math.sqrt(2) * (this.width / 2)
      }
      return size
    }
  },
  data () {
    return {
      hidden: this.width >= 32
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.avatar-box {
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  + .avatar-box {
    margin-left: 5px;
  }
}
</style>
