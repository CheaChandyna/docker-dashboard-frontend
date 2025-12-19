
import ManageContainerDetail from "../pages/manage/ManageContainerDetail.vue"
import ManageContainerListingPage from "../pages/manage/ManageContainerListingPage.vue"

export const manageRouter = [
    {
    path: '/manage',
    name: 'manage',
    component: ManageContainerListingPage
    },
    {
    path: '/manage/:container_id',
    name: 'manage-containers-detail-page',
    component: ManageContainerDetail
  }
]