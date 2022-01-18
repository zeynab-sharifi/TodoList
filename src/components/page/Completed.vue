<template>
    <section class="main">
        <div class="todo-list-section">
            <div class="container">
                <todo-list :todos="todos" @removeElement="removeElement" @edited-todo="editTodo" ></todo-list>
            </div>
        </div>
    </section>
    <BtnAddTodo @add-todo="addTodo"></BtnAddTodo>
</template>
<script>
import TodoList from "./TodoList/TodoList.vue";
import BtnAddTodo from "./TodoList/BtnAddTodo.vue";
export default{
    components:{
        TodoList,
        BtnAddTodo,
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