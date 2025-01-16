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
  ],
})
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} :: shopDaddy`
    next()
})

export default router
