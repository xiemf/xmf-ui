import xInput from './input'
import xAffix from './affix'
// const components = [
//   xInput
// ]
const install = function (Vue) {
  if (install.installed) return
  Vue.component('xInput', xInput)
  Vue.component('xAffix', xAffix)
  // components.forEach(component => {
  //   Vue.component(component.name, component)
  // })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  xInput
}