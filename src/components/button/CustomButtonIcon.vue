<template>
  <div class="button-container">
      <img class="icon" :src="`/icons/button/${props.icon}.svg`"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    icon: string,
}>()

</script>

<style scoped lang="scss">
.button-container {
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease;

  .icon {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}
</style>