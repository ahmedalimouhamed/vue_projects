import {defineStore} from 'pinia'
import {reactive, ref, computed} from 'vue'

export const useTasksStore = defineStore('tasks', () => {
    let tasks = reactive([
        ...JSON.parse(localStorage.getItem('tasks')) || []
    ])

    let filterBy = ref("")

    let modalIsActive = ref(false)

    function setFilter(value){
        filterBy.value = value
    }

    function addTask(newTask) {
        if(newTask.name && newTask.description){
            newTask.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
            tasks.push({...newTask})
            closeModal()
        }else{
            alert('Please fill in all fields')
        }
    }
    
    function toggleCompleted(id) {
        tasks.forEach(t => {
            if(t.id === id){
            t.completed = !t.completed
            }
        })
    }

    function openModal(){
        modalIsActive.value = true
    }

    function closeModal(){
        modalIsActive.value = false
    }
      
    const filteredTasks = computed(() => {
        switch(filterBy.value){
            case 'todo': return tasks.filter(t => !t.completed)
            case 'done': return tasks.filter(t => t.completed)
            default: return tasks
        }
    })
    return{
        tasks,
        filterBy,
        setFilter,
        addTask,
        toggleCompleted,
        modalIsActive,
        openModal,
        closeModal,
        filteredTasks
    }
})