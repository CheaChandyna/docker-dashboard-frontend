<template>
  <div class="info-grid">
    <div class="label">ID</div>
    <div class="value">{{ container.id }}</div>

    <div class="label">Name</div>
    <div class="value">{{ container.name }}</div>

    <div class="label">Status</div>
    <div class="value">{{ container.status }}</div>

    <div class="label">Created</div>
    <div class="value">{{ formattedCreated }}</div>

    <div class="label">Start Time</div>
    <div class="value">{{container.startTime}}</div>
  </div>
</template>

<style>
  .info-grid {
        display: grid;
        grid-template-columns: 150px 1fr; /* label | value */
        gap: 1rem 5rem; /* row gap | column gap */
        align-items: center;
      }
      .label {
        font-weight: 600;
        color: rgb(0, 0, 0);
        font-size: 1.5rem;
      }
      .value {
        font-size: 1.25rem;
      }
</style>

<script setup lang="ts">
  import { computed } from 'vue';
	const container = defineProps<{
		id: string,
		name: string[] | undefined,
		status: string,
		created: number,
		startTime?: string
	}>()

  const formattedCreated = computed(() => {
  if (!container.created) return '-'
  return new Date(container.created * 1000)
    .toISOString()
    .replace('T', ' ')
    .slice(0, 19)
  })
</script>