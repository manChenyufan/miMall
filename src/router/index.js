import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Index from '../views/index.vue'
import Product from '../views/Product.vue'
Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        {
            path:"/product",
            name:'product',
            component:Product
        }
      ]
    }
  ]
});