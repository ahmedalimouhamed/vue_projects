<script setup>

import {useTasksStore} from '@/stores/tasksStore'
const store = useTasksStore()

let newTask = {completed: false, id: store.tasks.length + 1};
</script>

<template>
    <div class="form">
        <h3>Add a new task</h3>
        <label for="title">Title</label>
        <input v-model="newTask.name" type="text" name="title" placeholder="Enter a title..." id="title"><br />
        <label for="description">Description</label>
        <textarea v-model="newTask.description" name="description" rows="4" placeholder="Enter a description..." id="description" /><br/>
        <button class="btn gray" @click="store.addTask(newTask)">Add Task</button>
      </div>
</template>