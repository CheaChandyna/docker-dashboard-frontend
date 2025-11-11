import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
  state: () => ({
    tabs: {
      home: {
        name: 'Containers',
        route: '/',
        icon: 'containers'
      },
      users: {
        name: 'Users',
        route: '/users',
        icon: 'containers'
      }
    }
  })
})