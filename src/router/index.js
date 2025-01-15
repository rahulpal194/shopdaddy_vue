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
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} :: eBazaar`

	const userStore = useUserStore()
    const userVerify = userStore.user.isAuthenticated
	const pageVerify = to.meta.requiresAuth && !userVerify

	if(pageVerify) next({ name: '403' })
	else next()
})

export default router
