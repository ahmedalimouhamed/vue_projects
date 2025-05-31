<template>
    <div class="min-h-screen flex flex-col">
        <header class="bg-gray-600 text-white p-4 flex justify-between items-center">
            <h1 class="text-xl font-bold">Gestion des projets</h1>
            <div class="flex items-center gap-4">
                <span v-if="auth.user">{{auth.user.email}} ({{auth.user.role}})</span>
                <button v-if="auth.user" @click="logout" class="bg-white text-blue-600 px-3 py-1 rounded">Logout</button>
            </div>
        </header>
        
        
        <div class="flex flex-1">
            <aside class="w-60 bg-gray-200 p-4">
                <nav class="flex flex-col gap-2">
                    <RouterLink to="/">Dashboard</RouterLink>
                    <RouterLink to="/projects">Projects</RouterLink>
                </nav>
            </aside>

            <main class="flex-1 p-6">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore'
import { useRouter, RouterLink, RouterView } from 'vue-router'

const auth = useAuthStore()

const router = useRouter()

function logout(){
    auth.logout()
    router.push('/login')
}
</script>


<style scoped>
    .nav-link{
        @apply block px-3 py-2 rounded hover:bg-gray-300
    }
</style>
