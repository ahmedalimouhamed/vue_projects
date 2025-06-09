<template>
    <ul class="space-y-2">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task"/>
    </ul>
</template>


<script setup>

import {useTaskStore} from '../stores/useTaskStore'
import {storeToRefs} from 'pinia'
import TaskItem from './TaskItem.vue'

const {tasks}  = storeToRefs(useTaskStore())

</script>