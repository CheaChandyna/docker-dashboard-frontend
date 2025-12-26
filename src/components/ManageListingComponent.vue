<template>
  <div class="container">
    <div class="wrapper">
      <img src="/icons/immich.svg" alt="">
      
      <div class="info-and-buttons">
        <h2>{{ props.name }}</h2>

        <div class="button-wrapper">
          <CustomButton
            label="Add User"
            icon="add"
            @click.stop="router.push(`/manage/${props.containerId}/users`)"
          />
          <CustomButton
            label="Update"
            icon="up"
            @click.stop="router.push(`/manage/${props.containerId}/update`)"
          />
          <CustomButton
            label="Delete"
            icon="delete"
            hexColor="var(--red)"
            @click.stop="router.push(`/manage/${props.containerId}/delete`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import CustomButton from './button/CustomButtonStroke.vue';

const router = useRouter()
const props = defineProps<{
  name: string | undefined,
  containerId: string
}>()
</script>

<style scoped lang="scss">
.container {
  display: flex;
  border-radius: 1.5rem;
  background-color: var(--neutral-200);
  padding: 1.25rem;

  translate: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .wrapper {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;

    img {
      width: 6.25rem;
      height: 6.25rem;
    }

    .info-and-buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      height: 100%;

      h2 {
        font-size: 1.25rem;
      }
  
      .button-wrapper {
        display: flex;
        gap: 0.25rem;
        align-self: flex-end;
      }
    }
  }

}
</style>