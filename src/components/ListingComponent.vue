<template>
  <div class="container">
    <div class="wrapper">
      <img src="/icons/immich.svg" alt="">
      <h2>{{ props.name }}</h2>
    </div>

    <div>
      <PillLabelStroke 
        :label="props.state.charAt(0).toUpperCase() + props.state.slice(1)"
        :hexColor="stateColor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PillLabelStroke from './common/PillLabelStroke.vue';

const props = defineProps<{
  name: string | undefined,
  state: string,
}>()

const stateColor = computed(() => {
  switch (props.state) {
    case 'running':
      return 'var(--green)';
    case 'paused':
      return 'var(--orange)';
    case 'exited':
    default:
      return 'var(--red)';
  }
})

</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease;

  border-radius: 1.5rem;
  background-color: var(--neutral-100);
  padding: 1.25rem;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    img {
      width: 6.25rem;
      height: 6.25rem;
    }

    h2 {
      font-size: 1.25rem;
    }
  }

  .state-tag {
    height: fit-content;
    text-align: center;
    border-radius: 1rem;
    padding: 0.25rem 0.75rem;

    .state {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}
</style>