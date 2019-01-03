import xInput from './input.vue'
// xInput = function (Vue) {
// }
xInput.install = function (Vue) {
  Vue.component(xInput.name, xInput)
}
export default xInput