<template>

    <div class="max-w-xl mx-auto">
        <h1 class="text-2xl font-bold mb-4">Tâches</h1>

        <TaskForm @add="addTask"/>

        <TaskItem 
            v-for="task in tasks" 
            :key="task.id" 
            :task="task" 
            @delete="deleteTask"
        />

        <div class="mt-4 text-sm text-gray-600">
            Terminé : {{completedCount}} / {{tasks.length}}
        </div>

    </div>
</template>

<script setup>
    import {ref, computed, watch, onMounted} from 'vue'
    import TaskItem from '../components/TaskItem.vue'
    import TaskForm from '../components/TaskForm.vue'
    import TaskObserver from '../observers/TaskObserver.js'

    const tasks = ref([])

    const completedCount = computed(() => tasks.value.filter(t => t.done).length)
    const filteredTasks = computed(() => tasks.value.slice().reverse())
    const addTask = task => tasks.value.push(task)

    const deleteTask = id => {
        tasks.value = tasks.value.filter(t => t.id !== id)
    }

    watch(tasks, (newTask) => {
        console.log('Taches modifiées ', newTask)
    }, {deep: true})

    onMounted(() => {
        TaskObserver.subscribe((event, data) => {
            if(event === 'task-status-changed'){
                console.log('Etat modifié : ', data.type)
            }
        })
    })
</script>