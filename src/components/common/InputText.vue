<template>
  <div class="input-container">
    <div class="email-wrapper">
      <label for="id" class="input-label-style">{{ label }}</label>
      <input
        :type="type"
        :id="id"
        class="input-box-style"
        autocomplete="email"
        :placeholder="placeholder"
        v-model="data"
        required
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  label: String,
  id: String,
  type: {
    type: String,
    default: "",
  },
  autocomplete: {
    type: String,
    default: "",
  },
  placeholder: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
const data = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
<style scoped>
.email-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
