<template>
    <div>
        <h2>Child Component</h2>
        <p>Theme : {{theme}}</p>
        <p>User name : {{user.name}}</p>
        <p>User role : {{user.role}}</p>
    </div>
</template>

<script setup>

import {inject} from 'vue'

const theme = inject('theme')
const user = inject('user')

</script>