<template>
  <div class="page"> 
    <div class="action-container">
      <div class="header">
        <img src="/icons/settings.svg" alt="settings">
        <p class="title">Actions</p>
      </div>
      <div class="action-buttons">
        <CustomButton 
          icon="up"
          label="Start"
        />

        <CustomButton 
          icon="down"
          label="Stop"
        />

        <CustomButton 
          icon="restart"
          label="Restart"
        />
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.page {
  padding: 1rem;
  
  .action-container {
    background-color: #FFFFFF;
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

}
</style>

<script setup lang="ts">
import CustomButton from '../../components/button/CustomButtonStroke.vue';
</script>