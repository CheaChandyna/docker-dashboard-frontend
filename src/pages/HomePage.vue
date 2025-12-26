<script setup lang="ts">
import { ref } from 'vue';

const stats = ref([
  { icon: '', number: 24, label: 'Total Containers', type: 'primary' },
  { icon: '', number: 18, label: 'Running', type: 'success' },
  { icon: '', number: 4, label: 'Stopped', type: 'warning' },
  { icon: '', number: 2, label: 'Errors', type: 'error' }
]);

const quickStats = ref([
  { key: 'Active Networks:', value: '5' },
  { key: 'Total Images:', value: '42' },
  { key: 'Volumes:', value: '12' },
  { key: 'CPU Usage:', value: '45%' },
  { key: 'Memory Usage:', value: '2.8 GB / 8 GB' }
]);

const systemInfo = ref([
  { label: 'Docker Version:', value: '24.0.7' },
  { label: 'API Version:', value: '1.43' },
  { label: 'OS:', value: 'Linux' },
  { label: 'Architecture:', value: 'x86_64' }
]);
</script>

<template>
  <div class="page">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">Docker Dashboard</h1>
      <p class="hero-subtitle">Manage and monitor your containers with ease</p>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" :class="['stat-card', stat.type]">
        <div class="stat-icon">{{ stat.icon }}</div>
        <div class="stat-content">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Info Cards -->
    <div class="info-section">
      <div class="info-card">
        <h2 class="info-title">
          Quick Stats
        </h2>
        <div class="info-list">
          <div v-for="item in quickStats" :key="item.key" class="info-item">
            <span class="info-key">{{ item.key }}</span>
            <span class="info-value">{{ item.value }}</span>
          </div>
        </div>
      </div>

      <div class="info-card">
        <h2 class="info-title">
          System Information
        </h2>
        <div class="info-list">
          <div v-for="item in systemInfo" :key="item.label" class="info-item">
            <span class="info-key">{{ item.label }}</span>
            <span class="info-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--neutral-800);
  font-weight: 500;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: var(--white);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-card.primary {
  border-left: 4px solid var(--primary-500);
}

.stat-card.success {
  border-left: 4px solid var(--green);
}

.stat-card.warning {
  border-left: 4px solid var(--orange);
}

.stat-card.error {
  border-left: 4px solid var(--red);
}

.stat-icon {
  font-size: 2.5rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neutral-100);
  border-radius: 0.75rem;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--black);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--neutral-800);
  font-weight: 500;
}

/* Info Section */
.info-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-card {
  background: var(--white);
  border-radius: 1rem;
  padding: 1.5rem;
}

.info-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--black);
}

.icon {
  font-size: 1.5rem;
}

/* Info List */
.info-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: var(--neutral-100);
  border-radius: 0.5rem;
}

.info-key {
  font-weight: 600;
  color: var(--neutral-900);
}

.info-value {
  font-weight: 700;
  color: var(--primary-600);
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page {
    padding: 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .info-section {
    grid-template-columns: 1fr;
  }
}
</style>