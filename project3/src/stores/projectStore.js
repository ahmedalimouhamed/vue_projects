import {defineStore} from 'pinia'

export const useProjectStore = defineStore('project', {
    state: () => ({
        projects: JSON.parse(localStorage.getItem('projects')) || []
    }),

    actions: {
        addProject(project){
            this.projects.push(project)
            this.save()
        },

        deleteProject(id){
            this.projects = this.projects.filter(p => p.id !== id)
            this.save()
        },

        updateProject(updated){
            const index = this.projects.findIndex(p => p.id === updated.id)
            if(index !== -1){
                this.projects[index] = updated
                this.save()
            }
        },

        save(){
            localStorage.setItem('projects', JSON.stringify(this.projects))
        }
    }
})