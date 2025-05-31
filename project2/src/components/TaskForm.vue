<template>
    <form @submit.prevent="submitForm">
        <input v-model="title" placeholder="Nouvele tache" required>
        <button type="submit">Ajouter</button>
    </form>
</template>

<script setup>

import {ref} from 'vue'

const emit = defineEmits(['submit'])

const title = ref('')

function submitForm(){
    emit('submit', {title: title.value, done:false})
    title.value = ''
}

</script>