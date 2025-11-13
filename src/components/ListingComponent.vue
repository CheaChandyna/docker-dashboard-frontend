<template>
  <div class="container">
    <div class="wrapper">
      <img :src="props.icon" alt="">
      <h2>{{ props.name }}</h2>
    </div>

    <div 
      class="state-tag" 
      :class="props.state === 'running' ? 'active' : props.state === 'stopped' ? 'inactive' : 'processing'">
      <span>{{ props.state.charAt(0).toUpperCase() + props.state.slice(1) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string,
  name: string | undefined,
  state: string,
}>()

</script>

<style scoped>
.container {
  --padding: 1.25rem;

  width: 50.5rem;
  height: 8.75rem;
  border-radius: 1.5rem;
  background-color: var(--neutral-100);
  padding: var(--padding);
  position: relative;

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
    width: 8rem;
    height: 2.25rem;
    text-align: center;
    border-radius: 1rem;
    padding: 0.5rem 1.25rem;
    position: absolute;
    right: var(--padding);
    top: var(--padding);

    span {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }

  .active { background-color: var(--green); }
  .inactive { background-color: var(--red); }
  .processing { background-color: var(--orange);}
}
</style>