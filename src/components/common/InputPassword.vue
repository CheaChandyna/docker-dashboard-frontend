<template>
  <div class="input-container">
    <label for="id" class="input-label-style">{{ label }}</label>
    <div class="passsword-container">
      <input 
        :type="passwordType('main')"
        :id="id"
        :placeholder="placeholder"
        class="input-style"
        :class="state ? ' ' : 'error-input'"
        v-model="data"
        />
    </div>

  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue';
const props = defineProps ({
    label: String,
    id: String,
    placeholder: String,
    state: {
        type: Boolean,
        default: 'true'
    },
    modelValue: String,
})

const emit = defineEmits (['update:modelValue'])
const data = computed ({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value)
})

type passwordField = 'main'
const showPassword = reactive<Record<passwordField, boolean>>({
    main:false,
})

const passwordType = (field: passwordField) => (showPassword[field] ? 'text' : 'password')
</script>
<style scoped>
  .password-container {
    position: relative;
    width: 100%;
  }
</style>