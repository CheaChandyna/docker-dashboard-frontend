
import ManageContainerDetail from "../pages/manage/ManageContainerDetail.vue"
import ManageContainerListingPage from "../pages/manage/ManageContainerListingPage.vue"
import ManageContainerUserPage from "../pages/manage/ManageContainerUserPage.vue"

export const manageRouter = [
  {
    path: '/manage',
    name: 'manage-container-listing-page',
    component: ManageContainerListingPage
  },
  {
    path: '/manage/:container_id',
    name: 'manage-containers-detail-page',
    component: ManageContainerDetail
  },
  {
    path: '/manage/:container_id/users',
    name: 'manage-containers-users-page',
    component: ManageContainerUserPage
  }
]