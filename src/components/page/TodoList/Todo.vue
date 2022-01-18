<template>
  <li v-if="editMode == false">
    <input class="form-check-input" type="checkbox" value="" id="CheckDo" v-model="todo.completed">
    {{todo.text}}
      <a href="#" @click="$emit('removeElement' , todo.key)"><span class="icon"><i class="fa fa-trash"></i></span></a>
      <a href="#" @click="enabelClick" data-bs-toggle="modal" data-bs-target="#EditTodo" value="Edit"><span class="icone"><i class="fas fa-edit"></i></span></a>
  </li>
  <div v-if="editMode == true" class="modal fade" id="EditTodo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="EditTodoLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title" id="EditTodoLabel">Edit Todo</h4>
        <p>Please write content of in input below!</p>
        <input type="text" v-model="todoText">
        
         <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
         <a href="#" data-bs-dismiss="modal" @click="editTodo"><span class="icone">Edit</span></a>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
    export default{
      emits: ['removeElement' , 'edited-todo'],
      props:{
          todo :{
          type : Object,
          required : true,
        }
      },
      data(){
        return {
          editMode : false,
          todoText : 'lhn'
        }
      },
      methods :{
        enabelClick(){
          this.editMode = true;
          this.todoText = this.todo.text;
        },
        editTodo(){
          this.editMode = false;
          this.$emit('edited-todo', { key : this.todo.key , text : this.todoText});
          this.todoText = '';
        }
      }
    }
</script>