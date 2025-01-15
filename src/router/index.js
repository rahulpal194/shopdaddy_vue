import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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

export default router
