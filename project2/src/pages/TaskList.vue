<template>
    <h2>Mes tâches</h2>
    <TaskForm @submit="addTask"/>

    <div>
        <button @click="store.setFilter('all')">Toutes</button>
        <button @click="store.setFilter('todo')">A faire</button>
        <button @click="store.setFilter('done')">Faites</button>
    </div>

    <ul>
        <TaskItem
            v-for="task in store.filteredTasks"
            :key="task.id"
            :task="task"
            @toggle="store.toggleTask"
            @delete="store.deleteTask"
        />
    </ul>
    
</template>

<script setup>
    import TaskItem from '@/components/TaskItem.vue'
    import TaskForm from '@/components/TaskForm.vue'
    import {useTaskStore} from '@/stores/taskStore'
    import {onMounted} from 'vue'

    const store = useTaskStore()

    onMounted(() => {
        store.fetchTasks()
    })

    const addTask = (task) => {
        store.addTask(task)
    }
</script>