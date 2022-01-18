<template>
        <div class="body-todo-list">
            <div class="box-todo-list">
                <NavbarTodo></NavbarTodo>
                <router-view >
                  <todo-list :todos="todos" @removeElement="removeElement" @edited-todo="editTodo" ></todo-list>

                </router-view>
                
                
            </div>
        <BtnAddTodo @add-todo="addTodo"></BtnAddTodo>
    </div>
</template>

<script>
import NavbarTodo from "../layer/NavTodo.vue";
import BtnAddTodo from "./TodoList/BtnAddTodo.vue";
import TodoList from "./TodoList/TodoList.vue"
export default {
    components: { 
        NavbarTodo,
        BtnAddTodo,
        TodoList
     },
     data() {
    return {
       todos : []
    }
  },
  methods :{
    addTodo(text){
      this.todos.push({
        key : Date.now(),
        done :false,
        text 
      })
    },
    removeElement(key){
      this.todos = this.todos.filter(item => item.key != key)
  },
  editTodo({ key , text }){
    this.todos = this.todos.map(item=> {
      if(item.key== key){
        return{
          ...item,
          text : text
        }
      }
      return item;
    })
  }
    }
}
</script>

<style>

</style>