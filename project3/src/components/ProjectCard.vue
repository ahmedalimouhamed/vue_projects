<template>
    <div class="p-4 rounded-lg shadow bg-white dark:bg-gray-800">
        <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
        <p class="text-sm">{{ project.description }}</p>
        <div class="mt-2 flex gap-2">
            <button class="bg-yellow-500 text-white px-2 py-1 rounded" @click="$emit('edit', project)">Edit</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded" @click="$emit('delete', project)">Delete</button>
        </div>
    </div>
</template>

<script setup>
    defineProps(['project'])
    defineEmits(['edit', 'delete'])
</script>

<style scoped>

</style>
