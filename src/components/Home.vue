<template>
<div id="">
            <h1>另一个组件</h1>
            <span>{{str}}</span>
            <br/>
            <button @click='tap()'>变化hi</button>




</div>
  
</template>

<script>
//暴露出组件对象模板不要名字
export default {
  name: 'Home',
  data () {
    return {
      str: 'fsAFDSFVCDA'
    }
  },
  methods:{
    tap(){
      //局部跳转按钮路由编程式写法
      this.$router.push('/about')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
