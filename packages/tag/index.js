import tag from './src/tag.vue'
tag.install = function (Vue) {
  Vue.component(tag.name, tag)
}
export default tag
