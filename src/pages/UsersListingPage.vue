<template>
  <div class="page">
    <div class="action-container">
      <div class="header">
        <img src="/icons/settings.svg" alt="settings">
        <p class="title">Actions</p>
      </div>
      <div class="action-buttons">
        <CustomButton 
          icon="add"
          label="Add User"
          @click="router.push('')"
        />

      </div>
    </div>

    <div class="table-container">
      <TableComponent>
        <colgroup>
          <col style="width:20%">
          <col style="width:25%">
          <col style="width:20%">
          <col style="width:15%">
          <col style="width:20%">
        </colgroup>

        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(user, index) in usersData"
            :key="index"
          >
            <td>{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.role }}</td>
            <td style="display: flex; gap: 0.75rem;">
              <CustomButtonIcon icon="edit"/>
              <CustomButtonIcon icon="delete"/>
            </td>
          </tr>
        </tbody>
      </TableComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import CustomButton from '../components/button/CustomButtonStroke.vue';
import CustomButtonIcon from '../components/button/CustomButtonIcon.vue';
import TableComponent from '../components/TableComponent.vue';

const router = useRouter()

const usersData = [
  {
    fullName: "Kanchnak Khorn",
    email: "kanchnakkhorn@gmail.com",
    username: "kanchnakkhorn",
    role: "Admin",
  },
    {
    fullName: "Krongly Ngoun",
    email: "kronglyngoun@gmail.com",
    username: "kronglyngoun",
    role: "Admin",
  },
  {
    fullName: "Jenneyvei Chhim",
    email: "jennyveichhim@gmail.com",
    username: "jennyveichhim",
    role: "User",
  },
  {
    fullName: "Chandyna Chea",
    email: "cheachandyna@gmail.com",
    username: "chandynachea",
    role: "User",
  },
  {
    fullName: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    username: "jonhdoe",
    role: "User",
  },
]
</script>

<style scoped lang="scss">
.page {
  padding: 1rem;
  
  .action-container {
    background-color: var(--white);
    padding: 1rem;
    border-radius: 0.75rem;

    .header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
  
      .title {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

    .action-buttons {
      padding-top: 1rem;
      display: flex;
      gap: 0.75rem
    }
  }

  .table-container {
    background-color: var(--white);
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.75rem;      
  }
}
</style>