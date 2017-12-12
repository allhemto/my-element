<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-button type = "primary">主要按钮</el-button>
    <my-component></my-component>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '这里是绑定的数据，不要把el组件元素放这里'
      }
    },
    components: {
      'my-component': {
        template: '<el-button type = "danger">非要这样引入el元素可以像这样处理</el-button>'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
