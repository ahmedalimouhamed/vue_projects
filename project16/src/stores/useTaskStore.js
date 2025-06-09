import {defineStore} from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {id: 1, title: 'Apprendre vue 3', done: false},
            {id: 2, title: 'Apprendre pinia', done: false},
            {id: 3, title: 'Apprendre vite', done: false},
        ]
    }),

    actions: {
        addTask(title){
            this.tasks.push({id: Math.random(), title, done:false})
        },

        toggleTask(id){
            const task = this.tasks.find(t => t.id === id)
            if(task) task.done = !task.done
        },

        deleteTask(id){
            console.log('delete task', id)
            this.tasks = this.tasks.filter(t => t.id !== id)
            console.log(this.tasks)
        }
    }
})