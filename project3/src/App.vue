<template>
    <MainLayout v-if="auth.user" />
    <RouterView v-else />
</template>

<script setup>
  import { useAuthStore } from './stores/authStore'
  import MainLayout from './layouts/MainLayout.vue'

  const auth = useAuthStore()
</script>


