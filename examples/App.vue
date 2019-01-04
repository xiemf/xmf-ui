<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input />
    <x-affix>
      <x-input v-model="item.name" :label="'姓名'" suffix-icon="x-icon-xinxi1" placeholder="请输入英文名">
      </x-input>
    </x-affix>
    <x-input v-model="item.sex" prefix-icon="x-icon-xinxi1" placeholder="请输入中文"
             :label="'性别'"/>
    <x-input v-model="item.age"
             :label="'年龄'" />
    <x-avatar>谢</x-avatar>
    <x-icon type="username"></x-icon>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 200vh;
}
</style>
