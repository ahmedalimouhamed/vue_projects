<template>
    <button @click="deleteTask" class="text-red-500 hover:underline">Supprimer</button>
</template>

<script setup>

import {useTaskStore} from '../stores/useTaskStore'

const props = defineProps(['taskId'])
const taskStore = useTaskStore()

function deleteTask(){
    console.log('delete task', props.taskId)
    taskStore.deleteTask(props.taskId)
}

</script>