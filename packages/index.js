import Input from './input'
import Affix from './affix'
import Avatar from './avatar'
import Icon from './icon'
// import Select from './select'
// import Option from './option'
import Card from './card'
import Tag from './tag'
import Col from './col'
import Row from './row'
import Menu from './menu'
import MenuGroup from './menu-group'
import MenuItem from './menu-item'
import SubMenu from './sub-menu'
const components = [
  Input, Affix, Avatar, Icon, Card, Tag, Col, Row,
  Menu, MenuGroup, MenuItem, SubMenu
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
  install
}
