import { createRouter,createWebHistory } from "vue-router";
import InComplieted from './components/page/InComplieted.vue'
import Completed from './components/page/Completed.vue'

const routes = [
    {path:"/", name:"InComplieted" , component:InComplieted},
    {path:"/complieted", name:"Completed" , component:Completed}
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;