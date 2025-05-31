import {defineStore} from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        loading: false,
        filter: 'all'
    }),

    getters: {
        filteredTasks(state){
            if(state.filter === 'done') return state.tasks.filter(t => t.done)
            if(state.filter === 'todo') return state.tasks.filter(t => !t.done)
            return state.tasks
        }
    },

    actions: {
        async fetchTasks(){
            this.loading = true
            const res = await axios.get('http://localhost:3000/tasks')
            this.tasks = res.data
            this.loading = false
        },

        async addTask(task){
            this.loading = true
            const res = await axios.post('http://localhost:3000/tasks', task)
            this.tasks.push(res.data)
            this.loading = false
        },

        async toggleTask(id){
            this.loading = true
            const task = this.tasks.find(t => t.id === id)
            if(!task) return

            task.done = !task.done
            await axios.put(`http://localhost:3000/tasks/${id}`, task)
            this.loading = false
        },

        async deleteTask(id){
            this.loading = true
            await axios.delete(`http://localhost:3000/tasks/${id}`)
            this.tasks = this.tasks.filter(t => t.id !== id)
            this.loading = false
        },

        setFilter(value){
            this.filter = value
        }
    }
})