<template>
    <li class="flex items-center justify-between border p-3 rounded shadow">
        <div>
            <input type="checkbox" :checked="task.done" @change="toggleTask(task.id)"/>
            <span :class="{'line-through' : task.done}" class="ml-2">{{task.title}}</span>
        </div>
        <TaskActions :taskId="task.id"/>
    </li>
</template>

<script setup>

import {inject} from 'vue'
import {useTaskStore} from '../stores/useTaskStore'
import TaskActions from './TaskActions.vue'

const props = defineProps(['task'])
const taskStore = useTaskStore()
const user = inject('user')

const toggleTask = (id) => {
    taskStore.toggleTask(id)
}

</script>