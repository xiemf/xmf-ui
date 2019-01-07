<template>
  <div id="app">
    <x-affix>
      <x-input v-model="item.name" :label="'姓名'" suffix-icon="x-icon-originalimage" placeholder="请输入英文名">
      </x-input>
    </x-affix>
    <x-input v-model="item.sex" prefix-icon="x-icon-originalimage" placeholder="请输入中文" :label="'性别'"/>
    <x-input v-model="item.age" :label="'年龄'" />
    <x-input></x-input>
    <x-avatar>谢</x-avatar>
    <x-icon type="username"></x-icon>
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
      <x-tag size="mini" :closable="true" dot>mimi tag</x-tag>
    </div>
    <div>
      <x-tag :closable="true" dot>default tag</x-tag>
    </div>
    <div>
      <x-tag size="large" :closable="true"  type="primary">大标签</x-tag>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      item: {
        name: ''
      }
    }
  },
  methods: {

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
}
.x-card-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
