<template>
  <table class="table">
    <slot />
  </table>
</template>

<style scoped lang="scss">
.table {
  width: 100%;
  font-size: 1.25rem;
  border-collapse: collapse;

  :deep(thead) {
    tr {
      th {
        padding: 0.75rem 1rem;
        text-align: start;
      }
    }
  }

  :deep(tbody) {
    tr {
      td {
        padding: 0.75rem 1rem;
        text-align: start;
      }

      &:nth-child(odd) {
        background-color: var(--neutral-200);
      }
    }
  }
}
</style>