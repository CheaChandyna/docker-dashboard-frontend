<template>
  <div class="page">
    <div class="container">

      <form class="form-wrapper">
        <div class="login-heading-text">
            <h1>Log in to your account</h1>
            <p>Welcome back! Please enter your credentials</p>
        </div>
        <div class="input-wrapper">
            <InputText
              label="Email"
              id="email"
              type="email"
              autocomplete="email"
              placeholder="example@gmail.com"
              v-model="data.email"
            />
  
            <InputPassword
              label="Password"
              id="password"
              placeholder="password"
              v-model="data.password"
            />
          <button type="submit" class="submit-button">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import InputPassword from '../components/common/InputPassword.vue';
import InputText from '../components/common/InputText.vue';
import { ref } from 'vue';


const data = ref({
  email: '',
  password: '',
})

</script>
<style scoped>

.page {
  min-height: 100vh;
  background-color: var(--neutral-400);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.container {
  width: 100%;
  max-width: 730px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
}

.login-heading-text {
  text-align: center;
}

.login-heading-text h1 {
  font-size: 32px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 0.5rem;
}

.login-heading-text p {
  font-size: var(--text-2xl);
  font-weight: 400;
}

.input-wrapper {
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.submit-button {
  font-size: var(--text-2xl);
  align-self: center;
  padding: 1rem 2rem;
  background-color: var(--primary-700);
  color: var(--neutral-100);
  font-weight: 400;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: var(--primary-600);
}

</style>