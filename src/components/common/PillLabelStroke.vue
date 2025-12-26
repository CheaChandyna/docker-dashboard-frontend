<template>
  <div
    class="wrapper"
    :style="{ 
      border: `2px solid ${hexColor}`
     }"
  >
    <p 
     class="label"
      :style="{
        color: `${hexColor}`
      }"
    >
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string,
    hexColor?: string
  }>(),
  {
    label: 'Label',
    hexColor: 'var(--primary-700)'
  }
)
</script>

<style scoped lang="scss">
.wrapper {
  padding: 0.25rem 1rem;
  border-radius: 0.75rem;

  .label {
    font-weight: 700;
  }

}
</style>