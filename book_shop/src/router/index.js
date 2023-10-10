// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
      },
      { path: "/products", name: "tab1", component: () => import('@/views/Products.vue') },
      { path: "/favorites", name: "tab2", component: () => import('@/views/Favorites.vue') },
      { path: "/cart", name: "tab3", component: () => import('@/views/Cart.vue') },
      {
        path: '/bookdetails/:id',
        name: 'bookdetails',
        component: () => import('@/views/Bookdetails.vue'),
        props: true
      },
      {
        path: "/checkout/:bookId",
        name: "checkout",
        component: () => import('@/views/CheckOut.vue'),
        props: true, // Allow passing props to the Checkout component
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
