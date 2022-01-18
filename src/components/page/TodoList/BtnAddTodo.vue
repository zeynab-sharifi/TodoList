<template> 
<!-- button modal -->
<div class="modal-add-todo">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddTodo" @click="openModel" value="Add">
        <i class="fas fa-plus"></i>
    </button>
</div>

<!-- modal  -->
<div class="modal-todos">
  <div class="modal fade" id="AddTodo" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="AddTodoLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title" id="AddTodoLabel">New Todo</h4>
        <p>Please write content of in input below!</p>
        <input type="text" class="input-modal-todos" v-model="todoText" placeholder="Do something!">
        <div class="btn-modal-todos">
           <button type="button" class="btn btn-modal-black" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-modal-blue" data-bs-dismiss="modal" v-on:click="submit">Save</button>
        </div>

         </div>
    </div>
  </div>
</div>
</div>

</template>
<script>
  export default{
    emits : ['add-todo'],
    data(){
      return{
        todoText : ''
      }
    },
    methods : {
      submit(){
        this.$emit('add-todo' , this.todoText);
        this.todoText = '';
      }
    }
  }
</script>