<template>

    <form @submit.prevent="addTask" class="mb-4 flex gap-2">
        <input v-model="title" placeholder="Nouvelle tâche" class="border p-2 rounded w-full"/>
        <button class="bg-blue-600 text-white px-4 py-2 rounded">Ajouter</button>
    </form>
    
</template>

<script setup>
    import {ref} from 'vue'
    const title = ref('')

    const emit = defineEmits(['add'])

    const addTask = () => {
        if(title.value.trim()){
            emit('add', {id: Date.now(), title: title.value, done:false})
            title.value = ''
        }
    }
</script>