<template>
        <div class="body-todo-list">
            <div class="container">
              <div class="box-todo-list">
                <NavbarTodo></NavbarTodo>
                <router-view></router-view> 
              </div>
                
              </div>
        </div>
    
</template>

<script>
import NavbarTodo from "../layer/NavbarTodo.vue";


export default {
    components: { 
        NavbarTodo,
        
     },
     
}
</script>

<style>

</style>