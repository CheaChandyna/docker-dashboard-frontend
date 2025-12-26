<template>
  <div class="button-container" :style="{  
    'border': `3px solid ${hexColor}`,
    'color': `${hexColor}`,
    '--hover-bg-color': hexColor,
  }">
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
    hexColor?: string
  }>(),
  {
    label: 'Label',
    hexColor: "var(--primary-600)"
  }
)
</script>

<style scoped lang="scss">
.button-container {
  width: fit-content;
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
      font-weight: 600;
      white-space: nowrap;
    }
  }

  &:hover {
    background-color: var(--hover-bg-color);
    color: white !important;
    transform: translateY(-2px);

    .content {
      .label {
        color: var(--hover-text-color);
      }

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