<template>
  <div class="page"> 
    <div class="section-container">
      <div class="header">
        <img src="/icons/settings.svg" alt="settings">
        <p class="title">Actions</p>
      </div>
      <div class="action-buttons">
        <CustomButton 
          icon="up"
          label="Start"
        />

        <CustomButton 
          icon="down"
          label="Stop"
        />

        <CustomButton 
          icon="restart"
          label="Restart"
        />
      </div>
    </div>

    <div class="section-container">
      <div class="header">
        <img src="/icons/settings.svg" alt="settings">
        <p class="title">Container Details</p>
      </div>
      <ContainerDetailsComponent
        :id="data.id"
        :name="data.name"
        :status="data.status"
        :created="data.created"
        :startTime="data.startedTime"
      />
    </div>

    <div class="section-container">
      <div class="header">
        <img src="/icons/settings.svg" alt="">
        <p class="title">Logs</p>
      </div>
      <div class="logs">
        <pre>{{ logs }}</pre>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  .action-buttons {
    display: flex;
    gap: 0.75rem
  }

  .logs {
    color: white;
    background-color: var(--primary-900);
    padding: 1rem;
    border-radius: 0.5rem;
    max-height: 400px;
    overflow-y: auto;
    
    pre {
      margin: 0;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
      line-height: 1.5;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }

}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from '../../components/button/CustomButtonStroke.vue';
import ContainerDetailsComponent from '../../components/ContainerDetailsComponent.vue';

const data = ref( {
  id: 1,
  name: 'Immich',
  status: 'Up for 1 hour',
  created: 1760165368,
  startedTime: "2025-10-12 03:33:07",
})

const logs = ref(`[+] Crafty: 10/24/25 17:59:11 - INFO:	Starting migrations
[+] Crafty: 10/24/25 17:59:12 - INFO:	There is nothing to migrate
[+] Crafty: 10/24/25 17:59:12 - INFO:	Checking for reset secret flag
[+] Crafty: 10/24/25 17:59:12 - INFO:	No flag found. Secrets are staying
[+] Crafty: 10/24/25 17:59:13 - INFO:	Checking for remote changes to config.json
[+] Crafty: 10/24/25 17:59:14 - INFO:	Remote change complete.
[+] Crafty: 10/24/25 17:59:14 - INFO:	Initializing all servers defined
[+] Crafty: 10/24/25 17:59:14 - INFO:	Starting migrations
[+] Crafty: 10/24/25 17:59:14 - INFO:	There is nothing to migrate
[+] Crafty: 10/24/25 17:59:14 - INFO:	https://172.25.0.2:8443 is up and ready for connections.
[+] Crafty: 10/24/25 17:59:14 - INFO:	Server Init Complete: Listening For Connections!
[+] Crafty: 10/24/25 17:59:16 - INFO:	Loaded Server: ID 08bf7c23-dfd7-45b6-9f40-88256c0d490d | Name: The New LungVek | Autostart: False | Delay: 10
[+] Crafty: 10/24/25 17:59:16 - INFO:	Starting migrations
[+] Crafty: 10/24/25 17:59:16 - INFO:	There is nothing to migrate
[+] Crafty: 10/24/25 17:59:20 - INFO:	Loaded Server: ID 7e0a54b9-aa5b-4b4d-8f61-201db9441b70 | Name: LungVek RL | Autostart: False | Delay: 10
[+] Crafty: 10/24/25 17:59:20 - INFO:	Crafty started in daemon mode, no shell will be printed
[+] Crafty: 10/24/25 17:59:20 - INFO:	Setting up Crafty's internal components...
[+] Crafty: 10/24/25 17:59:22 - INFO:	Stats collection frequency set to 30 seconds
[+] Crafty: 10/24/25 17:59:24 - INFO:	Checking Internet. This may take a minute.
[+] Crafty: 10/24/25 17:59:25 - INFO:	Launching Scheduler Thread...
[+] Crafty: 10/24/25 17:59:25 - INFO:	Launching command thread...
[+] Crafty: 10/24/25 17:59:25 - INFO:	Launching log watcher...
[+] Crafty: 10/24/25 17:59:25 - INFO:	Launching realtime thread...
[+] Crafty: 10/24/25 17:59:26 - INFO:	Execution Mode: Non-interactive (e.g. 'python main.py')
[+] Crafty: 10/24/25 17:59:26 - INFO:	Application path: '/crafty'
[+] Crafty: 10/24/25 17:59:29 - INFO:	Crafty has fully started and is now ready for use!`)
</script>