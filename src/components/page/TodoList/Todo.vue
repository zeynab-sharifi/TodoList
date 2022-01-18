<template>
  <li v-if="editMode == false">
    <div class="todo-show">
      <input class="form-check-input" type="checkbox" value="" id="CheckDo" v-model="todo.completed">
        <div class="text-todo">
          {{todo.text}}
        </div>
      <div class="btn-edit-delete">
        
        <a href="#" @click="enabelClick" data-bs-toggle="modal" data-bs-target="#EditTodo" value="Edit"><span class="btn-edit"><i class="fa fa-pencil" aria-hidden="true"></i></span></a>
        <a href="#" @click="$emit('removeElement' , todo.key)"><span class="btn-delete"><i class="fa fa-trash"></i></span></a>
      </div>
      </div>
  </li>
  <div class="modal-todos">
  <div v-if="editMode == true" class="modal fade" id="EditTodo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="EditTodoLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h4 class="modal-title" id="EditTodoLabel">Edit Todo</h4>
            <p>Please write content of in input below!</p>
            <input class="input-modal-todos" type="text" v-model="todoText">
            
            <div class="btn-modal-todos">
              <button type="button" class="btn btn-modal-black" data-bs-dismiss="modal">Close</button>
              <button type="button" data-bs-dismiss="modal" class="btn btn-modal-blue" @click="editTodo">Edit</button>
          
            </div>
           </div>
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