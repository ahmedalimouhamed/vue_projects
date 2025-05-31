<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Tâches du projet : <span class="text-blue-600">{{projectName}}</span></h2>
    
        <form @submit.prevent="addTask" class="flex gap-2 mb-4">
            <input v-model="taskTitle" class="border p-2 rounded w-full" placeholder="Nouvelle tâche">
            <button class="bg-blue-600 text-white px-4 py-2 rounded">Ajouter</button>
        </form>

        <div class="grid grid-cols-3 gap-4">
            <div class="bg-gray-100 p-4 px-4 rounded">
                <h3 class="font-bold mb-2">à faire</h3>

                <div v-for="task in tasks.todo" :key="task.id" class="bg-white p-2 rounded shadow mb-2">
                    {{task.title}}
                    <button @click="moveTask(task.id, 'doing')" class="text-blue-600 text-sm">Commencer</button>
                </div>
            </div>

            <div class="bg-gray-100 p-4 px-4 rounded">
                <h3 class="font-bold mb-2">En cours</h3>

                <div v-for="task in tasks.doing" :key="task.id" class="bg-white p-2 rounded shadow mb-2">
                    {{task.title}}
                    <button @click="moveTask(task.id, 'done')" class="text-blue-600 text-sm">Terminer</button>
                </div>
            </div>

            <div class="bg-gray-100 p-4 px-4 rounded">
                <h3 class="font-bold mb-2">Fait</h3>

                <div v-for="task in tasks.done" :key="task.id" class="bg-white p-2 rounded shadow mb-2">
                    {{task.title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import {useRoute} from 'vue-router'

    const route = useRoute()
    const projectId = route.params.id
    const projectName = ref('')
    const taskTitle = ref('')

    const defaultTasks = {todo: [], doing: [], done: []}

    const storageKey = `tasks_${projectId}`
    const tasks = ref(JSON.parse(localStorage.getItem(storageKey)) || defaultTasks)

    onMounted(() => {
        const allProjects = JSON.parse(localStorage.getItem('projects')) || []
        projectName.value = allProjects[projectId] || 'Project Inconnu'
    })

    const saveTasks = () => localStorage.setItem(storageKey, JSON.stringify(tasks.value))

    const addTask = () => {
        if(taskTitle.value.trim()){
            tasks.value.todo.push({id: Date.now(), title: taskTitle.value.trim()})
            taskTitle.value = ''
            saveTasks()
        }
    }

    const moveTask = (taskId, toStage) => {
        ['todo', 'doing', 'done'].forEach(stage => {
            const index = tasks.value[stage].findIndex(t => t.id === taskId)
            if(index !== -1){
                const task = tasks.value[stage].splice(index, 1)[0]
                tasks.value[toStage].push(task)
            }
        })
        saveTasks()
    }
</script>
