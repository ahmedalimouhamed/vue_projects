import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Projects from '../pages/Projects.vue'
import Tasks from '../pages/Tasks.vue'
import Login from '../pages/Login.vue'  
import { useAuthStore } from '../stores/authStore'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/login', component: Login},
    {path: '/', component: Dashboard, meta: {requiresAuth: true}},
    {path: '/projects', component: Projects, meta: {requiresAuth: true}},
    {path: '/projects/:id/tasks', component: Tasks, props:true, meta: {requiresAuth: true}},
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if(to.meta.requiresAuth && !auth.user){
    next('/login')
  }else{
    next()
  }
})

export default router
