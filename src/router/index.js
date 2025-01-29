import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
	return { 
		top: 0, 
		behavior: 'smooth'
	}
  },
  routes: [
        {
			path: '/home',
			name: 'home',
			component: () => import('@/pages/client/HomePage.vue'),
			meta: {
				title: "Home",
				requiresAuth: false
			}
		},
        {
			path: '/products',
			name: 'products',
			component: () => import('@/pages/client/ProductList.vue'),
			meta: {
				title: "Products",
				requiresAuth: false
			}
		},
		{
			path: '/store',
			name: 'store',
			component: () => import('@/pages/client/StoreHome.vue'),
			meta: {
				title: "Store Home",
				requiresAuth: false
			}
		},
		{
			path: '/product/:id',
            name: 'ProductDetail',
            component: ()=> import('@/pages/client/ProductDetails.vue'),
			props:true,
			meta:{
				title:"Product Details"
			}
		}
  ],
})
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} :: shopDaddy`
    next()
})

export default router
