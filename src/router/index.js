import vue from 'vue'
import VueRouter from 'vue-router'
import { component } from 'vue/types/umd'

const home = () => import('../views/home/Home')
const category = () => import('../views/category/Category')
const cart = () => import('../views/cart/Cart')
const profile = () => import('../views/Profile/Profile')

vue.use(VueRouter)

const routers =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home,
  },
  {
    path:'/category',
    component:category,
  },
  {
    path:'/cart',
    component:cart,
  },
  {
    path:'/Profile',
    component:profile
  }
]

const router = new VueRouter({
  routers,
  mode: 'history'
})

export default router
