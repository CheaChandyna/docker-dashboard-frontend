<template>
  <div class="input-container">
    <label for="id" class="input-label-style">{{ label }}</label>
    <div class="passsword-container">
      <input 
        :type="isPassword ? 'text' : 'password'"
        :id="id"
        :placeholder="placeholder"
        class="input-style"
        :class="state ? ' ' : 'error-input'"
        v-model="data"
        />
        <button
          type="button"
          class="toggle-button" 
          @click="togglePassword">
          <img :src="passwordIcon()" alt="Toggle password">
        </button>
    </div>

  </div>
</template>
<script setup lang="ts">
import { ref ,computed } from 'vue';
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

const isPassword = ref(false)

function togglePassword() {
  isPassword.value = !isPassword.value
}

function passwordIcon (){
  return isPassword.value
  ? '/public/icons/Oneyes.svg'
  : '/public/icons/Offeyes.svg'
}

</script>
<style scoped>
  .input-container {
    margin: 1.5rem 0;
    position: relative;
  }
  
  .input-container input, input::placeholder {
    font-size: var(--text-base);
  }

  .toggle-button {
    right: 0.75rem;
    border: none;
    transform: translateY(60%);
    cursor: pointer;
    background-color: transparent;
    position: absolute;
  }

  .toggle-button img {
    width: 30px;
    height: 30px;
  }
</style>