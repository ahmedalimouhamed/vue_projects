<script setup>
import Task from "@/components/Task.vue";
import Filter from "@/components/Filter.vue";
import ModalWindowView from "@/components/modal/ModalWindowView.vue";
import AddTaskModal from "@/components/modal/AddTaskModal.vue";
import {useTasksStore} from "@/stores/tasksStore";

const appName = "Tasks Manager";
const store = useTasksStore()

store.$subscribe((mutation, state) => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
})

</script>

<template>

  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>
          {{appName}}
        </h1>
      </div>
      <div class="header-side">
        <button class="btn secondary" @click="store.openModal">+ Add Task</button>
      </div>
    </div>

    <Filter/>

    <div class="tasks">
      <Task v-for="task in store.filteredTasks" :key="task.id" :task="task" />
    </div>

    <ModalWindowView v-if="store.modalIsActive">
      <AddTaskModal />
    </ModalWindowView>

  </main>
  
   

</template>


<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }

}

.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.add-task {
  margin-top: 60px;

  input, textarea {
    width: 360px;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
  }

  button {
    width: 360px;
    margin-top: 12px;
  }
}


</style>