import { createRouter, createWebHistory } from "vue-router";
import SideNavBarComponent from "../components/SideNavBarComponent.vue";
import MainLayout from "../layouts/MainLayout.vue";
import HomePage from "../pages/HomePage.vue";
import UsersListingPage from "../pages/UsersListingPage.vue";

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
          path: '/users',
          name: 'Users Page',
          component: UsersListingPage
        }
      ]
    }
  ],
})

export default router;