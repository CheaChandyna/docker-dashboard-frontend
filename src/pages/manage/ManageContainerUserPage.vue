<template>
  <div class="page">
      <div class="action-container">
        <div class="header">
          <p class="title">Add user to a container</p>
        </div>

        <div>
          <p class="title">User</p>
          <select v-model="selectedUserId">
            <option value="" disabled selected>Add user</option>

            <option
            v-for="user in users_api_return.users"
            :key="user.id"
            :value="user.id"
            >
              {{ user.fullName }}
            </option>

          </select>
          
          <div class="action-buttons">
            <CustomButton 
              icon="up"
              label="Submit"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  const users_api_return = {
  "users": [
    {
      "id": "01",
      "username": "John.Lee",
      "fullName": "John Lee",
      "role": "admin"
    },
    {
      "id": "02",
      "username": "Hu.Tao",
      "fullName": "Hu Tao",
      "role": "viewer"
    }
  ],
  "roles": {
    "admin": {
      "view": true,
      "create": true,
      "edit": true,
      "delete": true,
      "manageUsers": true
    },
    "viewer": {
      "view": true,
      "create": false,
      "edit": false,
      "delete": false,
      "manageUsers": false
    }
  }
}

  import { ref } from 'vue'
  import CustomButton from '../../components/button/CustomButtonStroke.vue';
  // selected user id
  const selectedUserId = ref<string>('')

  // later you will replace this with API response
</script>

<style scoped lang="scss">
  
.page {
  padding: 1rem;
  
  .action-container {
    background-color: #FFFFFF;
    padding: 1rem;
    border-radius: 0.75rem;

    .title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .action-buttons {
      padding-top: 1rem;
      display: flex;
      gap: 0.75rem
    }

    
    select {
      width: 594px;
      height: 45px;
      color: var(--black);
      font-size: 24px;
      font-weight: 400;
      padding-left: 1em;
      appearance: none;
      border: none;
      line-height: inherit;
      background-color: var(--neutral-300);
      border-radius: 10px;
      outline:none;
      background-image: url('../../../public/icons/dropDownIcon.svg');
      background-repeat: no-repeat;
      background-position: right 1em center;
      background-size: 18px;
    }
    
  }
}
</style>