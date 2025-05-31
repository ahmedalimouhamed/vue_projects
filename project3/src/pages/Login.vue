<template>
    <div class="h-screen flex items-center justify-center bg-gray-100">
        <form @submit.prevent="submit" class="bg-white p-2 rounded shadow-md w-96">
            <h2 class="text-xl font-bold mb-4">Login</h2>
            
            <input class="w-full p-2 border-gray-300 rounded" v-model="email" type="email" placeholder="Email"  required/>

            <select v-model="role" class="w-full p-2 border-gray-300 rounded mt-2" >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
            </select>

            <button type="submit" class="w-full mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Connecter</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {useAuthStore} from '@/stores/authStore'
    import { useRouter } from 'vue-router'

    const email = ref('')
    const role = ref('member')
    const router = useRouter()
    const auth = useAuthStore()
    
    const submit = () => {
        auth.login(email.value, role.value)
        router.push('/')
    }
    
</script>

<style scoped>
    .input{
        @apply w-full p-2 border-gray-300 rounded
    }

    .btn-primary{
        @apply bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700
    }
</style>