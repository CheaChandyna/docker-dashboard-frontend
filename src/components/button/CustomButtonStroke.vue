<template>
  <div class="button-container" :style="{ '--bg-color': `var(${props.colorHex})` }">
    <div class="content">
      <img class="icon" :src="`/icons/button/${props.icon}.svg`"/>
      <p class="label">{{ props.label }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon: string,
    label?: string,
    colorHex?: string
  }>(),
  {
    label: 'Label',
    colorHex: "--primary-600"
  }
)
</script>

<style scoped lang="scss">
.button-container {
  width: fit-content;
  border: 2px solid var(--primary-600);
  color: var(--primary-600);
  padding: 0.5rem 1rem;
  border-radius: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;

  .content {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .icon {
      width: 20px;
      height: 20px;
      transition: all 0.3s ease;
    }

    .label {
      transition: all 0.3s ease;
      white-space: nowrap;
    }
  }

  &:hover {
    background-color: var(--bg-color);
    color: white;
    transform: translateY(-2px);

    .content {
      .icon {
        filter: brightness(0) invert(1);
      }
    }
  }

  &:active {
    transform: translateY(0);
  }
}
</style>