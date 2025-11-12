import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import HomePage from "../pages/HomePage.vue";
import UsersListingPage from "../pages/UsersListingPage.vue";
import SimpleLayout from "../layouts/SimpleLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import ContainersListingPage from "../pages/containers/ContainersListingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomePage
        },
        {
          path: '/containers',
          name: 'Containers ListingPage',
          component: ContainersListingPage
        },
        {
          path: '/users',
          name: 'Users Page',
          component: UsersListingPage
        }
      ]
    },
    {
      path: '/login',
      component: SimpleLayout,
      children: [
        {
          path: '',
          name: 'Login Page',
          component: LoginPage
        }
      ]
    }
  ],
})

export default router;