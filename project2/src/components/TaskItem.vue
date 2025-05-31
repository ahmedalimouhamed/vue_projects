<template>
    <li :class="{done: task.done}">
        <input type="checkbox" v-model="task.done" @change="toggle"/>
        {{ task.title }}
        <button @click="$emit('delete', task.id)">❌</button>
    </li>
</template>

<script setup>

defineProps(['task'])

const emit = defineEmits(['toggle', 'delete'])

function toggle(task){
    emit('toggle', task.id)
}

</script>


<style scoped>
.done {
    text-decoration: line-through;
    color: gray;
}
</style>
