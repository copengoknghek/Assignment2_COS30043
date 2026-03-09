<template>
  <div class="todo-list-container">
    <h2>To-Do List</h2>
    
    <!-- Add Task Input -->
    <div class="input-group mb-4">
      <input 
        type="text" 
        class="form-control" 
        placeholder="Enter a new task"
        v-model="newTask"
        @keyup.enter="addTask"
      />
      <button class="btn btn-primary" @click="addTask">Add</button>
    </div>

    <!-- Task List -->
    <div v-if="tasks.length === 0" class="alert alert-info">
      No tasks yet. Add a task to get started!
    </div>

    <div v-else class="task-list">
      <div 
        v-for="task in tasks" 
        :key="task.id" 
        class="task-item card mb-3"
      >
        <div class="card-body d-flex justify-content-between align-items-center">
          <div class="task-text">
            {{ task.text }}
            <span v-if="task.priority === 'high'" class="text-danger"> (High Priority)</span>
            <span v-else-if="task.priority === 'low'" class="text-warning"> (Low Priority)</span>
          </div>
          <div class="task-actions">
            <button 
              class="btn btn-warning btn-sm me-2"
              @click="togglePriority(task.id)"
            >
              {{ task.priority === 'high' ? 'Mark as Low Priority' : 
                 task.priority === 'low' ? 'Remove Priority' : 'Mark as High Priority' }}
            </button>
            <button 
              class="btn btn-danger btn-sm"
              @click="deleteTask(task.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data() {
    return {
      newTask: '',
      tasks: [],
      nextId: 1
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') {
        alert('Please enter a task.');
        return;
      }
      
      const task = {
        id: this.nextId++,
        text: this.newTask.trim(),
        priority: null // null, 'high', or 'low'
      };
      
      // Insert at the beginning of the array
      this.tasks.unshift(task);
      this.newTask = '';
    },
    
    deleteTask(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
    
    togglePriority(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        if (task.priority === null) {
          task.priority = 'high';
        } else if (task.priority === 'high') {
          task.priority = 'low';
        } else {
          task.priority = null;
        }
      }
    }
  }
};
</script>

<style scoped>
.todo-list-container {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.todo-list-container h2 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  border-left: 4px solid #007bff;
}

.task-text {
  flex: 1;
  font-size: 1rem;
}

.task-actions {
  display: flex;
  gap: 5px;
}

@media (max-width: 768px) {
  .card-body {
    flex-direction: column;
    align-items: flex-start !important;
  }
  
  .task-actions {
    margin-top: 10px;
    width: 100%;
  }
  
  .task-actions button {
    flex: 1;
  }
}
</style>
