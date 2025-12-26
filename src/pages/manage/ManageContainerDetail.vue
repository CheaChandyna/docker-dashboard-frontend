<template>
  <div class="page">
    <div class="section-container">
      <div class="header">
        <img src="/icons/settings.svg" alt="settings" />
        <p class="title">Actions</p>
      </div>

      <div class="action-buttons">
        <CustomButton icon="up" label="Start" />
        <CustomButton icon="down" label="Stop" />
        <CustomButton icon="restart" label="Restart" />
      </div>
    </div>

    <div class="section-container">
      <div class="header">
        <img src="/icons/container.svg" alt="container" />
        <p class="title">Container status</p>
      </div>

      <ContainerDetailsComponent
        v-if="selectedContainer"
        :id="selectedContainer.Id"
        :name="selectedContainer.Names[0]?.replace('/', '')"
        :status="selectedContainer.Status"
        :created="selectedContainer.Created"
        :startTime="selectedContainer.StartedAt"
      />
    </div>

    <div class="section-container">
      <div class="header">
        <img src="/icons/accessby.svg" alt="access" />
        <p class="title">Access By</p>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .action-buttons {
    display: flex;
    gap: 0.75rem;
  }

  

}
</style>


<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import CustomButton from '../../components/button/CustomButtonStroke.vue'
import ContainerDetailsComponent from '../../components/ContainerDetailsComponent.vue'

const route = useRoute()
const containerId = route.params.container_id as string

// TEMP: mock data for UI reference
// Replace this later with real API state
interface ContainerSummary {
  Id: string
  Names: string[]
  Status: string
  Created: number
  StartedAt: string
}
const containers = ref<ContainerSummary[]>([
  {
    Id: "546613bfd1b2213a36eefe4f8821e8d6e9a94e99172307ac9f84f6250ebdc116",
    Names: ["/lost-and-found-prod"],
    Status: "Up 3 seconds",
    Created: 1760165368,
    StartedAt: "2025-10-12 03:33:07",
  },
  {
    Id: "874aa77951e476fc36e7b5ce3af6e06b0ac0fd4521c00423033d52bb3c79e216",
    Names: ["/dichi-system-postgres-1"],
    Status: "Up About a minute",
    Created: 1759999906,
    StartedAt: "2025-10-12 03:30:10"
  }
])

const selectedContainer = computed(() =>
  containers.value.find(c => c.Id === containerId)
)

</script>
