<template>
  <div class="input-container">
    <label for="id" class="input-label-style">{{ label }}</label>
    <input 
        :type="type"
        :id="id"
        class="input-style"
        autocomplete="email"
        :placeholder="placeholder"
        v-model="data"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps ({
    label: String,
    id: String,
    type: {
        type: String,
        default: '',
    },
    autocomplete: {
        type: String,
        default: '',
    },
    placeholder: String,
    modelValue: String,
})

const emit = defineEmits (['update:modelValue'])
const data = computed ({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value)
})
</script>
<style scoped>

    .input-container input, input::placeholder {
        font-size: var(--text-base);
    }
    
</style>