import { findComponentUpward, findComponentsUpward } from '../../../src/utils/tools'
export default {
  data () {
    return {
      menu: findComponentUpward(this, 'CipMenu')
    }
  },
  computed: {
    hasParentSubmenu () {
      return !!findComponentUpward(this, 'CipSubMenu')
    },
    parentSubmenuNum () {
      return findComponentsUpward(this, 'CipSubMenu').length
    },
    mode () {
      return this.menu.mode
    }
  }
}
