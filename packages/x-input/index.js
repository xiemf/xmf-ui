import xInput from './xInput.vue'
// xInput = function (Vue) {
// }
xInput.install = function (Vue) {
  Vue.component(xInput.name, xInput)
}
export default xInput