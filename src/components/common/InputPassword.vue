<template>
  <div class="input-container">
    <div class="password-wrapper">
      <label for="id" class="input-label-style">{{ label }}</label>
      <div class="passsword-container">
        <input
          :type="isPassword ? 'text' : 'password'"
          :id="id"
          :placeholder="placeholder"
          class="input-box-style"
          :class="state ? ' ' : 'error-input'"
          v-model="data"
          required
        />
        <button type="button" class="toggle-button" @click="togglePassword">
          <img :src="passwordIcon()" alt="Toggle password" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps({
  label: String,
  id: String,
  placeholder: String,
  state: {
    type: Boolean,
    default: "true",
  },
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
const data = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const isPassword = ref(false);

function togglePassword() {
  isPassword.value = !isPassword.value;
}

function passwordIcon() {
  return isPassword.value
    ? "/public/icons/Oneyes.svg"
    : "/public/icons/Offeyes.svg";
}
</script>
<style scoped>
.password-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.toggle-button {
  right: 0.75rem;
  border: none;
  transform: translateY(60%);
  cursor: pointer;
  background-color: none;
  position: absolute;
}

.toggle-button img {
  width: 30px;
  height: 30px;
}

.passsword-container {
  position: relative;
  align-items: center;
}
</style>
