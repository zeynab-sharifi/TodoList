
<template>
  <HeaderTodo></HeaderTodo>
  <router-view></router-view>
</template>
<script>

import HeaderTodo from "./components/HeaderTodo.vue";

  export default{
    name:'App',
    components:{
    HeaderTodo,
}
  }
</script>
<style>

</style>
