import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../pages/ProductList.vue'
import ProductCreate from '../pages/ProductCreate.vue'
import ProductEdit from '../pages/ProductEdit.vue'

const routes = [
    {path: '/', component: ProductList},
    {path: '/create', component: ProductCreate},
    {path: '/edit/:id', component: ProductEdit, props:true}
]

export default createRouter({
  history: createWebHistory(),
  routes
})
