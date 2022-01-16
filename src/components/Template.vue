<template>
    <section>
        <div class="body-todo-list">
        <div class="todo-section">
            <div class="box-todo-list">
                <NavbarTodo></NavbarTodo>
                <router-view></router-view>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import NavbarTodo from "./layer/NavbarTodo.vue";
export default {
    components: { NavbarTodo }
}
</script>

<style>

</style>