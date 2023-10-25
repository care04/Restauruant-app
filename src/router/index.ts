import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Cart from '../components/Cart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home", 
      component: HelloWorld
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    }
  ]
})

export default router