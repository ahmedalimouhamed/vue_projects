<template>
    <div class="mb-4">
        <input v-model="title" placeholder="Nouvelle tache" class="border p-2 mr-2"/>
        <button @click="addTask" class="bg-blue-500 text-white px-4 py-1 rounded">Ajouter</button>
    </div>
</template>

<script setup>

import {ref} from 'vue'
import {useTaskStore} from '../stores/useTaskStore'

const title = ref('')
const taskStore = useTaskStore()

function addTask(){
    if(title.value.trim()){
        taskStore.addTask(title.value)
        title.value = ''
    }
}

</script>