<template>
  <div id="app">
    <x-affix>
      <x-input v-model="item.name" :label="'姓名'" suffix-icon="x-icon-originalimage" placeholder="请输入英文名">
      </x-input>
    </x-affix>
    <x-input v-model="item.sex" prefix-icon="x-icon-originalimage" placeholder="请输入中文" :label="'性别'"/>
    <x-input v-model="item.age" :label="'年龄'" />
    <x-avatar>谢</x-avatar>
    <cip-icon type="username"></cip-icon>
    <div class="x-card-box">
      <x-card shadow="always" style="width:30%">
        <span slot="header">hello</span>
        <p>hello,I'am an always shadow card</p>
      </x-card>
      <x-card shadow="hover" style="width:30%">
        <span slot="header">hello</span>
        <p>hello,I'am a hover shadow card</p>
      </x-card>
      <x-card shadow="never"  style="width:30%">
        <span slot="header">hello</span>
        <p>hello,I'am an never shadow card</p>
      </x-card>
    </div>
    <div>
      <x-tag size="mini" :closable="true" dot @click.native="liClick" @close="handleClose">mimi tag</x-tag>
      <x-tag :closable="true" dot>default tag</x-tag>
      <x-tag size="large" :closable="true"  type="primary">大标签</x-tag>
    </div>
    <div>
      <x-tag >tag</x-tag>
      <x-tag type="primary">tag</x-tag>
      <x-tag type="success" dot>tag</x-tag>
      <x-tag type="success" >tag</x-tag>
      <x-tag type="warning" >tag</x-tag>
      <x-tag type="error" >tag</x-tag>
    </div>
    <!-- <div class="row-demo">
      <x-row :gutter="12">
        <x-col :span="6" :offset="12">1</x-col>
        <x-col :span="3">123</x-col>
        <x-col :span="6">123</x-col>
      </x-row>
    </div> -->

    <cip-menu ref="menu" theme="dark"  :active-name="item.sex" :open-names="openNames" @on-select="select">
      <cip-sub-menu name="3" key="3">
        <span slot="title">123</span>
        <cip-menu-item name="3-111" key="3-1">1</cip-menu-item>
        <cip-menu-item name="3-211" key="3-2">222</cip-menu-item>
        <cip-menu-item name="3-311" key="3-3">33333</cip-menu-item>
        <cip-menu-item name="3-411" key="3-4">4444444</cip-menu-item>
      </cip-sub-menu >
      <cip-menu-item name="1" key="1">1</cip-menu-item>
      <cip-menu-item name="2" key="2">2</cip-menu-item>
      <cip-menu-item name="4" key="4">4</cip-menu-item>
    </cip-menu>
    <button @click="changeOpenNames">change</button>
     <cip-dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <cip-icon type="more"></cip-icon>
        </a>
        <cip-dropdownMenu slot="list">
            <cip-dropdown-item>驴打滚</cip-dropdown-item>
            <cip-dropdown-item>炸酱面</cip-dropdown-item>
            <cip-dropdown-item disabled>豆汁儿</cip-dropdown-item>
            <cip-dropdown-item>冰糖葫芦</cip-dropdown-item>
            <cip-dropdown-item divided>北京烤鸭</cip-dropdown-item>
        </cip-dropdownMenu>
    </cip-dropdown>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      item: {
        name: '',
        sex: '3-111'
      },
      act: '1',
      openNames: []
    }
  },
  methods: {
    handleClose (e) {
      console.log(e)
    },
    liClick () {
      console.log(123)
    },
    select (key) {
      this.act = key
      console.log(key)
    },
    changeOpenNames () {
      this.openNames = ['3']
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  height: 200vh;
  background: #ddd;
}
.x-card-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.row-demo .x-col {
  border: 1px solid #ddd;
}
</style>
<style lang="less" scoped>
.tag-test{
  display: inline-flex;
  width: 80px;
  height: 32px;
  border:1px solid #ddd;
  font-size: 14px;
  &::after{
    font-size: 0;
    content: '';
    height: 100%;
  }
  .tag-dot{
    display: inline-block;
    border:1px solid #ddd;
    vertical-align: middle;
    .dot{
      display: inline-block;
      width: 12px;
      height: 12px;
      background: #ddd;
    }
  }
  .tag-text{
    border:1px solid #ddd;
    display: inline-block;
  }
  .tag-close{
    border:1px solid #ddd;
    display: inline-block;
  }

}
  .test1{
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
  }
  .test2{
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 40px;
    border: 1px solid #ddd;
  }
  .test3{
    display: inline-block;
    width: 20px;
    height: 80px;
    border: 1px solid #ddd;
  }
</style>
