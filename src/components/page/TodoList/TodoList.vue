<template>
    <ul class="todoList">
          <todo v-for="(item , index) in todos" :todo="item" :key="index" @removeElement="$emit('removeElement' , $event)" @edited-todo="$emit('edited-todo' , $event)"></todo>
    </ul>
    
</template>
<script>
import Todo from './Todo.vue'
    

export default{
  emits: ['removeElement' , 'edited-todo'],
    props : {
      todos : {
          type : Array,
          required : true,
      }
  },
  components :{
    Todo 
  },
  
}
</script>