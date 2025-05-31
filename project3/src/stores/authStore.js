import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null
    }),

    actions: {
        login(email, role='member'){
            this.user= {email, role}
            localStorage.setItem('user', JSON.stringify(this.user))
        },

        logout(){
            this.user = null
            localStorage.removeItem('user')
        },

        isAdmin(){
            return this.user?.role === 'admin'
        }
    }
})