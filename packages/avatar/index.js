import Avatar from './avatar.vue'
// xInput = function (Vue) {
// }
Avatar.install = function (Vue) {
  Vue.component(Avatar.name, Avatar)
}
export default Avatar
