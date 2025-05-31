<template>
    <div>
        <h2 class="text-2xl font-bold mb-6">Dashboard</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-6 bg-white shadow rounded text-lg flex items-center gap-2"><strong>{{projectCount}}</strong> projects</div>
            <div class="p-6 bg-white shadow rounded text-lg flex items-center gap-2"><strong>{{completedTasks}}</strong> completed tasks</div>
            <div class="p-6 bg-white shadow rounded text-lg flex items-center gap-2"><strong>{{uncompletedDeadlines}}</strong> échéances proches</div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const projectsCount = ref(5)
    const completedTasks = ref(17)
    const uncompletedDeadlines = ref(3)
</script>
