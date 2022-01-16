<template>
  <div class="navbar-date-todo">
      <div class="container">
          <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                  <DataTodo></DataTodo>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                  <NavTodo></NavTodo>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import DataTodo from "./DataTodo.vue";
import NavTodo from "./NavTodo.vue";
export default {
    components: { 
        DataTodo,
        NavTodo
     }
}
</script>

<style>

</style>