<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <hr/>
    <v-home></v-home>
    
  </div>
</template>

<script>
//当成组件标签来用
import Home from "./Home"


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //声明一下
  components:{
    'v-home':Home

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{color:red}

</style>
