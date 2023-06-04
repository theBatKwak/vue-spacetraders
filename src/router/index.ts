import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterSuccessView from '../views/RegisterSuccessView.vue'
import DashboardView from '../views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth.store'
import { LocalDataService } from '../services/localData.service'
import FleetView from '../views/FleetView.vue'
import ContractsView from '../views/ContractsView.vue'
import GalaxyMapView from '../views/GalaxyMapView.vue'
import ShipView from '../views/ShipView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register-success',
      name: 'register-success',
      component: RegisterSuccessView
    },
    {
      path: '/fleet',
      name: 'fleet',
      component: FleetView
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: ContractsView
    },
    {
      path: '/galaxymap',
      name: 'galaxymap',
      component: GalaxyMapView
    },
    {
      path: '/ship/:shipsymbol',
      name: 'shipview',
      component: ShipView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const publicPages = ['/login', '/register', '/register-success']
  const authStore = useAuthStore()
  if (!authStore.isLoggedIn) {
    const storedToken: string | undefined = LocalDataService.getLocalData()
    if (storedToken) {
      await authStore.loginAgent(storedToken)
    }
  }
  const authRequired = !publicPages.includes(to.path)
  if (authRequired && !authStore.isLoggedIn) {
    return next('/register')
  }
  next()
})

export default router
