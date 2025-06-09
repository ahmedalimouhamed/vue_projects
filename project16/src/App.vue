<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Gestion des tâches</h1>
    <AddTaskForm/>
    <TaskList/>
  </div>
</template>


<script setup>

import {provide} from 'vue'
import AddTaskForm from './components/AddTaskForm.vue'
import TaskList from './components/TaskList.vue'


provide('user', {
  name: 'Alice',
  role: 'admin'
})

</script>
