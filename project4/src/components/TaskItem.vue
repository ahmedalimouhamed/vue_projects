<template>
    <div class="p-3 bg-white rounded shadow mb-2 flex justify-between items-center">
        <span :class="{'line-through' : task.done}">{{task.title}}</span>

        <div class="flex gap-2">
            <input type="checkbox" v-model="task.done" @change="toggleDone"/>
            <button @click="$emit('delete', task.id)" class="text-red-600">X</button>
        </div>
    </div>
</template>

<script setup>
    import TaskObserver from '../observers/TaskObserver.js'

    defineProps(['task'])

    const toggleDone = (task) => {
        TaskObserver.notify('task-status-changed', task)
    }
</script>

<style scoped>
    .line-through{
        text-decoration: line-through;
    }
</style>
