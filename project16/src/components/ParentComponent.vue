<template>
    <div>
        <h2>Parent Component</h2>
        <ChildComponent />
    </div>
</template>

<script setup>

import ChildComponent from './ChildComponent.vue'
import {provide} from 'vue'

provide('theme', 'dark')
provide('user', {
    name: 'John Doe',
    role: 'admin'
})

</script>
    