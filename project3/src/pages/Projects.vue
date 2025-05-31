<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Mes Projets</h2>

        <form @submit.prevent="addProject" class="flex gap-2 mb-4">
            <input v-model="newProject" placeholder="Nom du projet" class="border p-2 rounded w-full"/>
            <button class="bg-blue-600 text-white px-4 py-2 rounded">Ajouter</button>
        </form>

        <ul class="space-y-2">
            <li v-for="(project, index) in projects" :key="index" class="bg-white p-4 rounded shadow flex justify-between">
                <span>{{project}}</span>
                <div class="flex gap-2">
                    <RouterLink :to="`/projects/${index}/tasks`" class="text-blue-600 underline">Tâches</RouterLink>
                    <button @click="remove(index)" class="text-red-500 hover:underline">Supprimer</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const projects = ref(JSON.parse(localStorage.getItem('projects')) || [])
    const newProject = ref('')

    const save = () => localStorage.setItem('projects', JSON.stringify(projects.value))

    const addProject = () => {
        if(newProject.value.trim()){
            projects.value.push(newProject.value.trim())
            newProject.value = ''
            save()
        }
    }

    const remove = (index) => {
        projects.value.splice(index, 1)
        save()
    }
</script>
