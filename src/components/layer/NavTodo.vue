<template>
    <nav class="navbar navbar-expand-lg">
                    <ul class="navbar-nav">
                            <li class="nav-item">
                            <router-link class="nav-link" to="/">incomplieted</router-link>
                            </li>
                            <li class="nav-item">
                            <router-link class="nav-link" to="/complieted">complieted</router-link>
                            </li>
                        </ul>
                    </nav>
</template>
<script>
    export default{
        // :class="{selected:visibility=='/complieted  '}" 
        // :class="{selected:visibility=='/incomplieted'}" 

        // filters = {
        //     incomplieted:function(todos){
        //         return todos.filter(function(todo){
        //             return !todo.complieted;
        //         })
        //     },
        //     complieted:function(todos){
        //         return todos.filter(function(todo){
        //             return todo.complieted;
        //         })
        //     }
        // }
    }
</script>