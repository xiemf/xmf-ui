import Input from './input'
import Affix from './affix'
import Avatar from './avatar'
import Icon from './icon'
const components = [
  Input, Affix, Avatar, Icon
]
const install = function (Vue) {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Input
}
